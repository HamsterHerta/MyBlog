---
title: Mac编程环境配置
createTime: 2025/07/26 09:48:51
permalink: /mem/utiymh7n/
---
## 安装 Homebrew
在 Mac 中，一般通过 Homebrew 安装常用软件。官网给出的方法是在 Mac 终端输入安装命令：
```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
通常情况下，国内的网络环境会报错：
```shell
curl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused
```
这时需要换源，从国内镜像网站安装：
```shell
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```
回车执行指令后，根据提示操作。具体包括以下提示操作：

**（1）选择下载镜像**

根据需要选择下载源，例如，我这里选择[中科大下载源](https://zhida.zhihu.com/search?content_id=170924509&content_type=Article&match_order=1&q=%E4%B8%AD%E7%A7%91%E5%A4%A7%E4%B8%8B%E8%BD%BD%E6%BA%90&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NTE1MDcwNjIsInEiOiLkuK3np5HlpKfkuIvovb3mupAiLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjoxNzA5MjQ1MDksImNvbnRlbnRfdHlwZSI6IkFydGljbGUiLCJtYXRjaF9vcmRlciI6MSwiemRfdG9rZW4iOm51bGx9.G8eVzOFCZEkOsd6M2sdWKibnk_wMzTsDkJGSC_-_U7A&zhida_source=entity)，就输入‘1’，回车。

![](https://pic2.zhimg.com/v2-739f08cdbb3fb14802bfa91588278241_1440w.jpg)

**（2）确认删除旧版本**

如果存在旧版本，会弹出删除旧版本提示，输入"Y"，回车。

![](https://pic2.zhimg.com/v2-cf55167d8fe7a2a2ea3a43855e8f01cf_1440w.jpg)

**（3）输入开机密码（用于mac确认第三方应用安装）**

**（4）安装git**

如果之前没有安装过git，会终止homebrew安装，弹出git安装提示，点击“安装”。

**（5）再次执行homebrew安装指令**

耐心等待git安装完成后，再次运行homebrew安装指令，重新根据提示操作即可。

安装需要一段时间，过程中，可以在终端看到脚本执行了那些操作。

![](https://pic4.zhimg.com/v2-bf1f0461a373e541af8be956dce862bf_1440w.jpg)

**（6）验证是否安装成功**

安装脚本执行完成后，重启终端。（重启后才生效）

通过在终端输入"brew -v"，可以查看homebrew版本。

如果正确输出版本信息，表示成功安装。

> [!note]  
> 虽然叫做'Homebrew'，但实际使用时，命令是'brew'。

```text
qiuxiannv@qiuxiannvdeMBP ~ % brew -v
Homebrew 3.1.7-42-gd45832b
Homebrew/homebrew-core (git revision 09d1a8b385; last commit 2021-05-15)
Homebrew/homebrew-cask (git revision c1dad4a5cf; last commit 2021-05-15)
qiuxiannv@qiuxiannvdeMBP ~ % 
```

> [!note]  
> 在M1芯片上，homebrew的安装路径为："/opt/Homebrew/"

**（7）Homebrew卸载**

如需卸载，使用指令：

```shell
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh)"
```

## Python 安装

### 1. 安装 python

在官网下载 [python 安装包](https://www.python.org/downloads/release/python-3135/)，选择相应的安装平台。下载后，安装即可

![[python安装包.png]]
### 2. 配置环境变量

输入命令 `which python3`，查看 python 安装路径：
```shell
/usr/local/bin/python3
```
在配置文件 `~/.bash_profile` 中添加 python 路径：
```shell
sodu vim ~/.bash_profile
```
打开配置文件，在文件末尾添加 python 路径：
```shell
export PATH="/usr/local/bin:${PATH}"
alias python="/usr/local/bin/python3"
```
输入命令，保存配置
```shell
source ~/.bash_profile
```

环境变量配置完成后，输入命令 `which python` 和 `python`，会显示正确信息：
![[python信息.png]]
## Conda 安装
### 1. Miniconda 的安装

进入[清华软件镜像站](https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/)，下载对应的安装包 `Miniconda3-py313_25.5.1-0-MacOSX-arm64.sh`
![[miniconda.png]]
将终端工作目录切换到安装包下载目录 `cd /Users/admin/Downloads`

对 sh 脚本文件添加可执行权限
```shell
chmod +x Miniconda3-py313_25.5.1-0-MacOSX-arm64.sh
```
执行 sh 脚本文件，显示 miniconda 的基本信息。按下回车键后，阅读软件安装协议，输入 yes 同意协议，继续安装。
![[conda1.png]]
询问安装路径，按下回车为默认安装路径 `/Users/admin/miniconda3`
![[conda2.png]]
等待一段时间，询问是否初始化 conda 命令
![[conda3.png]]
Conda 安装完成后，重启终端，命令前出现 base 标志。在命令行中输入 conda，若返回 conda 信息，则安装成功。
![[conda4.png]]
### 2. Conda 换源
由于 conda 的默认官方源在国外，下载速度不稳定，因此需要更换国内的源。
```shell
# 删除之前添加的源
conda config --remove-key channels

# 添加conda-forge国内源
conda config --add channels conda-forge 
```

### 3. 虚拟环境的创建

安装完成后，可以使用以下命令来创建一个新的Python环境：

```shell
conda create --name myconda python=3.13
```

这将创建一个名为`myenv`的新环境，并使用[Python](https://geek-docs.com/python/python-top-tutorials/1000100_python_index.html "Python 教程") 3.8版本。可以根据自己的需求选择不同的Python版本。

激活该环境后，可以使用以下命令来安装其他的Python包：

```shell
conda install package_name
```

可以使用 `conda list` 命令来查看当前环境已安装的包列表。用 `conda remove` 命令来删除不用的包。

### 4. 常见 conda 命令

* 查询 conda 版本
```shell
conda --version
```
* 查看conda环境详细信息
```shell
conda info
```
* 查看当前有哪些虚拟环境
```shell
conda env list
conda info --envs
```
* 创建一个新的虚拟环境
```shell
conda create -n xxx python=3.10
```
其中，通过 -n或--name 来自定义的环境名称，如：xxx；同时，指定Python的版本。

* 激活虚拟环境
```shell
conda activate xxx
```
* 退出当前虚拟环境
```shell
conda deactivate
```
* 彻底删除某个虚拟环境
```shell
conda remove -n your_env_name --all
```
* 复制某个虚拟环境
```shell
conda create --name new_env_name --clone old_env_name
```
* 安装包
```shell
conda install xxx
```
 (如：conda install numpy)

* 指定包版本：
```shell
conda install xlrd=1.2.0
```
也可以使用pip install安装：
```shell
pip install xlrd==1.2.0 
```

* 批量安装 requirements.txt 文件中包含的组件依赖
```shell
conda install --yes --file requirements.txt
```

* 批量导出包含环境中所有依赖包到requirements.txt文件。
```shell
conda list -e > requirements.txt
```

* 删除某个包
```shell
conda remove xxxx
```

* 升级当前环境中的某个包
```shell
conda update xxx
```

* 升级所有包：
```shell
conda update --all
```

* 搜索包
```shell
conda search xxx
```
删除没有用的安装包。  
Conda 安装的包都在目录Anaconda/pkgs下。随着使用，conda 安装的包也越来越多；有时候会出现以下不好的情况：有些包安装之后，从来没有使用过；一些安装包的tar包也保留在了计算机中；由于依赖或者环境等原因，某些包的不同版本重复安装。上面的这些情况使得anaconda显得更加冗余，并且浪费储存；对于这些情况可以使用conda clean 净化Anaconda。
```shell
conda clean -p
```
或者
```shell
conda clean --packages
```
* 删除tar包
```shell
conda clean -t
```
或者
```shell
conda clean --tarballs
```

* 删除所有的安装包及cache、删除索引缓存、锁定文件、未使用过的包和tar包。
```shell
conda clean -y --all
```

* 查看镜像源
```shell
conda config --show channels
```

* 添加镜像源  
如：添加清华源
```shell

conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free)  

conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
```

* 配置安装包时显示安装来源
```shell
conda config --set show_channel_urls yes
```

上面的设置表示从channel中安装包时显示channel的url，这样就可以知道包的安装来源了。

* 清除索引缓存，保证用的是镜像站提供的索引
```shell
conda clean -i
```

* 切换回默认源（注意这个命令是删除所有用户配置的、添加的源，恢复anaconda官方的源）
```shell
conda config --remove-key channels
```

* 移除某个镜像源  
如：移除清华源
```shell
conda config --remove channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
```

## Julia 环境配置
### 1. Julia 下载
在[官网下载地址](https://julialang-s3.julialang.org/bin/mac/aarch64/1.11/julia-1.11-lastesrt-macaarch64.tar.gz)或[清华源镜像下载地址](https://mirrors.tuna.tsinghua.edu.cn/julia-releases/bin/mac/aarch64/1.11/julia-1.11-lastesrt-macaarch64.tar.gz) 下载 `.tar.gz` 安装包。解压安装包：
```shell
tar zxvf julia-1.11-latest-macaarch64.tar.gz
```
解压完成后将 julia 的解压目录移动到 /usr/local 目录下：
```shell
mv julia-1.11.5 /usr/local/
```
移动完成后我们就可以使用 julia 的完整目录执行 Julia 命令：
```shell

$ /usr/local/julia-1.7.2/bin/julia -v   
julia version 1.7.2
```
julia -v 命令用于查看版本号。

julia 使用完整路径调用可执行文件：`/usr/local/julia-1.7.2/bin/julia -v`
### 2. 环境变量的配置
也可以将 julia 命令添加到您的系统 PATH 环境变量中，编辑 `~/.bash_profile` 文件，在最后一行添加以下代码：
```shell
export PATH="$PATH:/usr/local/julia-1.7.2/bin/"
```
添加后执行以下命令，让环境变量立即生效：
```shell
source ~/.bash_profile
```
这样我们就可以直接执行 julia 命令而不需要添加完整路径：
```shell

$ julia -v
julia version 1.7.2
```

### 3. Jupyter 拓展安装

接下来使用 conda安装ipython和jupyter两个拓展。相应的命令是(均在terminal中运行)：
```powershell
conda install ipython
conda install jupyter
```
安装完成之后输入:
```shell
pip3 freeze
```
查看python拓展列表看是否有ipython和jupyter。安装成功之后，在terminal中输入：
```shell
jupyter notebook
```
会打开默认浏览器，进入jupyter notebook的初始页面，点右上角可以新建，但是这时上面只有python 3的选项。
![[jupyter.png]]

打开 julia，安装 IJulia 包，联动 julia 和 jupyter：
```shell
using Pkg
Pkg.add("IJulia")
```

## 参考文章
1. [ Mac：安装Python3并配置环境变量（本地多个Python版本选择配置）](https://developer.aliyun.com/article/1130782)
2. [ 从零起步在Mac上优雅配置python环境](https://zhuanlan.zhihu.com/p/661593468)
3. [ Mac brew安装失败的解决方案 (使用清华大学镜像）](https://blog.csdn.net/Lesen14/article/details/129344761)
4. [ Macos 安装 Julia](https://zhuanlan.zhihu.com/p/42746487)
5. [ Mac OS中安装配置Anaconda及常用conda命令回顾](https://blog.csdn.net/qq_42681787/article/details/145096210)
6. [ Julia 语言环境安装](https://www.runoob.com/julia/julia-environment.html)
