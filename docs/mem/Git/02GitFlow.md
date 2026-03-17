---
title: Git工作流
createTime: 2025/12/07 20:09:27
permalink: /mem/q9ftbqf2/
---

## Git时光机
### 版本回退
### 工作区和暂存区
### 撤销文件修改
**1.文件仅在工作区修改，但并未提交到暂存区（即并没有add）**  
对于单个文件的撤销修改而言，使用下面方法。
```shell
git checkout -- <filename>
```
撤销工作区中所有文件的修改，则
```shell
git checkout .
```
==文件回到最近一次该文件git commit或git add时的状态。== 

**2.文件在工作区和暂存区都有修改，但并未提交到版本库**  
此时文件仅add，没有commit。采取以下步骤来撤销修改：
:::steps
1. 使用`git status`查看仓库状态
2. 使用`git rm --cached <filename>`命令来放弃该文件的暂存
3. 此时，再使用`git status`查看仓库状态，文件不被git追踪，并且它是修改的状态，没有提交到暂存区。
4. 如果你之前已经commit了该文件，那么可以先：`git reset HEAD <filename>`让该文件回到工作区的状态。然后：`git checkout -- <filename>`即可。
5. 如果你还没有commit过该文件，那么使用`git checkout -- <filename>`命令无法撤销修改。
:::

**3.文件在工作区、暂存区和版本库都有修改**  
对于单个文件的撤销修改而言，使用下面方法。
```shell
git reset --hard HEAD <filename>
git checkout -- <filename>
```

## 参考资料
1. [git撤销某个文件的修改](https://blog.csdn.net/qq_32907195/article/details/115333898)
2. [撤销修改](https://liaoxuefeng.com/books/git/time-travel/restore/index.html)
