---
title: Lazyvim
createTime: 2026/02/12 12:46:40
permalink: /mem/xejhq2zi/
---
## 安装配置
参考[官方教程](https://www.lazyvim.org/installation)，开箱即用  
> [!note]
> 初次进入lazyvim会安装所有插件，会加载较长时间。
## 简单教程

## 快捷键
### 基本操作

## 常见问题
### Neo-tree隐藏文件不显示问题
LazyVim通过模块化插件系统管理Neo-tree，其默认配置位于`plugins/extras/editor/neo-tree.lua`文件中。该配置默认启用了文件系统监控和当前文件跟踪功能，但缺少显示隐藏文件的关键参数。  
- **解决方案1：修改Neo-tree配置**  
- **解决方案2:使用快捷键**
  - `<leader>+e`呼出文件树后，使用快捷键`shift+h`显示隐藏文件  


## 参考资料
1.[lazyvim备忘录](https://www.zzkrix.com/posts/lazyvim-init/)
