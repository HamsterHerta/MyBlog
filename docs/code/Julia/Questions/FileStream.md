---
title: 循环文件写入数据丢失问题
createTime: 2025/12/20 21:53:10
permalink: /code/akevtsq0/
---
## 问题来源
julia中反复打开文件并写入数据会导致许多数据的遗漏。如下面这段代码在运行时会产生严重的数据丢失现象：
```julia
for year in year_list
    for month in month_list
        # i = 1
        folder_path = "E:\\MAVEN\\KP\\l3\\$year\\$month"
        if !isdir(folder_path)
            println("Folder does not exist: $folder_path")
            continue
        end
        files = readdir(folder_path)
        println("Year: $year, Month: $month, Number of files: $(length(files))")
        for file in files
            if endswith(file, ".jld2")
                file_path = joinpath(folder_path, file)
                println("Processing file: $file_path")
                #date = dat_list[i]
                #out_file_name = "MAVEN_data_clean_$year$month$date.csv"
                out_file_name = "MAVEN_data_clean_$year$month.csv"
                out_path = joinpath(data_raw_dir, out_file_name)
                df = read_data(file_path, out_path)
                #i += 1
            end
        end
    end
end
```

## 问题分析
**问题1：文件写入的竞争条件**  
你在循环中对同一文件重复打开和关闭，可能导致：  
1. 文件句柄未及时释放
2. 多文件同时写入时数据丢失

**问题2：文件大小检查的时机问题**  
filesize(out_file) 在每次打开文件时检查，但如果文件正在被其他进程写入，可能得到不准确的结果

**问题3：未检查文件是否被成功创建**
如果第一个处理的文件没有数据，文件不会被创建，后续文件写入时会出错

**问题4：缺乏错误处理和重试机制**
文件操作失败时没有重试，直接跳过

## 解决方法
将一个月的数据读取到内存中，然后一起写入一个文件中：
```julia
function process_monthly_files(year, month, folder_path, data_raw_dir)
    """
    处理一个月内的所有jld2文件，合并后写入一个CSV文件
    
    参数:
    - year: 年份
    - month: 月份
    - folder_path: 源文件目录
    - data_raw_dir: 输出目录
    """
    
    if !isdir(folder_path)
        println("文件夹不存在: $folder_path")
        return 0
    end
    
    files = readdir(folder_path)
    jld2_files = filter(f -> endswith(f, ".jld2"), files)
    
    if isempty(jld2_files)
        println("在 $folder_path 中没有找到jld2文件")
        return 0
    end
    
    println("Year: $year, Month: $month, Number of files: $(length(jld2_files))")
    
    # 收集所有数据
    all_data_frames = []
    total_rows = 0
    
    for (i, file) in enumerate(jld2_files)
        file_path = joinpath(folder_path, file)
        println("处理文件 [$i/$(length(jld2_files))]: $file")
        
        df_clean = read_data(file_path, "")  # 不立即写入
        
        if nrow(df_clean) > 0
            push!(all_data_frames, df_clean)
            total_rows += nrow(df_clean)
            println("  读取到 $(nrow(df_clean)) 行有效数据")
        else
            println("  文件没有有效数据")
        end
    end
    
    # 合并所有数据并写入文件
    if !isempty(all_data_frames)
        # 创建输出文件名
        out_file_name = "MAVEN_data_clean_$(year)$(month).csv"
        out_path = joinpath(data_raw_dir, out_file_name)
        
        # 合并所有DataFrame
        if length(all_data_frames) == 1
            final_df = all_data_frames[1]
        else
            # 使用vcat合并多个DataFrame
            final_df = vcat(all_data_frames...)
        end
        
        # 写入文件
        success = safe_write_to_csv(final_df, out_path)
        
        if success
            println("成功写入月份 $year-$month: $total_rows 行数据")
        else
            println("写入月份 $year-$month 数据失败")
        end
        
        return total_rows
    else
        println("月份 $year-$month 没有有效数据")
        return 0
    end
end
```