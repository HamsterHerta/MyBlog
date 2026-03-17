---
title: zoxide
createTime: 2026/03/15 21:44:28
permalink: /mem/q2is99vj/
---
## 简介
zoxide 是一个比传统 `cd` 命令更智能的目录跳转工具，灵感来源于 `z` 和 `autojump`，并在它们的基础上做了大量优化。它通过记录你访问过的路径及其频率，构建权重系统，使得你只需输入目录名称的关键词即可完成快速跳转。  

## 安装
macos系统可以直接使用Homebrew安装
```shell
brew install zoxide
```
更多安装方法参考[官方网站](https://github.com/ajeetdsouza/zoxide)

## 使用方法
zoxide 提供了类似 `cd` 的 `z` 命令：
```shellz foo              # 进入与 foo 匹配度最高的目录
z foo bar          # 进入同时匹配 foo 和 bar 的最高评分目录
z foo /            # 进入以 foo 开头的子目录
z ~/foo            # z 也可以像普通的 cd 命令一样使用
z foo/             # 进入相对路径
z ..               # 返回上一级目录
z -                # 返回上一个目录
zi foo             # 使用交互式选择进入目录（基于 fzf）
z foo<空格><TAB>   # 显示交互式补全（zoxide v0.8.0+，支持 bash 4.4+/fish/zsh）
```
每次使用 z 或 cd 命令进入目录时，都会自动记录路径。


## 参考资料
1. [zoxide](https://github.com/ajeetdsouza/zoxide)
2. [快速目录跳转工具 zoxide 使用指南](https://zhuanlan.zhihu.com/p/1934915380322743333)
