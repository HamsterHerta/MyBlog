---
title: Git报错及处理
createTime: 2025/07/26 10:16:21
permalink: /mem/ta0heh2m/
---

## Error: Remote Origin Already Exist

该报错表明“远程仓库已存在”，一般在执行命令：
```shell
git remote add origin <SOME-URL>/<SOME-REPOSITORY-NAME>.git
```
后出现
```shell
fatal: remote origin already exists.
```
远程对象有名称来标识它们，每个存储库可以根据需要拥有任意多个远程对象。但是，如果您尝试添加一个与现有遥控器同名的遥控器，则不能有两个同名的遥控器，因此发生错误。

首先你需要验证该远程仓库是否真正存在。运行以下命令：
```shell
git remote -v
```
来查看现有的远程仓库以及其 URL。

如果该远程仓库已存在，可能是重复执行 `git remote add` 命令，可以不用处理。如果一定要处理该问题，一般有如下方法：

> [!note] 
> **方法 1：删除现有远程**  
> 
> :::: steps
> 1. 在 GitHub 上创建新的远程仓库
> 2. 删除旧的远程仓库
> 3. 将新在线存储库作为远程仓库
> 4. Push your code  
> ::::
> 

可以用以下命令简单地删除现有远程：
```shell
git remote remove origin
```

或用命令修改远程名称：
 ```shell
git remote rename <old-name> <new-name>
```


> [!note] 
> **方法 2：更新现有的远程 URL**  
> 使用命令可以快速达成这一目标：
> ```shell
> git remote set-url origin https://github.com/git/git.git
> ```


## Error: failed to push some refs to [remote repo]

该报错主要发生在当您尝试将本地更改推送到 GitHub 时，而本地存储库（repo）尚未使用远程存储库中的任何更改进行更新。

一般通过从远程仓库拉取代码更改来修复错误：

```shell
git pull origin main
```

使用此命令同步远程和本地存储库以消除错误时可能会失败。如果请求成功，则继续运行下面的命令来推送您自己的更改：

```shell
git push -u origin main
```

也可以通过以下命令修复错误：

```shell
git pull --rebase origin main
```

## Error: Connection reset by ... port 22 fatal: Could not read from remote repository.
遇到 `Connection reset by ... port 22` 错误，通常意味着你的网络与 GitHub 之间的 SSH 连接被某种防火墙、代理或 ISP（运营商）给强行掐断了。  
通常有以下解决方法：   
**1. 如果（没有）开启了网络代理**  
可以关闭（开启）代理，然后重试。或修改`config`文件，让SSH走本地代理：
在 `~/.ssh/config` 中，针对 `github.com` 添加一行配置（假设你的本地代理端口是 7890）：
```
Host github.com
    Hostname github.com
    User git
    ProxyCommand nc -v -x 127.0.0.1:7890 %h %p  # Linux/macOS 用户
    # Windows 用户通常使用：ProxyCommand connect -S 127.0.0.1:7890 %h %p
```

**2. 使用 443 端口进行 SSH**   
GitHub 提供了一个备选方案：允许你通过 HTTPS 的端口（443）来运行 SSH，这通常能绕过大多数防火墙。  
::::steps
1. 测试443端口是否可用： `ssh -T -p 443 git@ssh.github.com`   
  如果出现 `Hi [username]! You've successfully authenticated...`，说明此方法可行。
2. 打开（或创建）你的 SSH 配置文件： `~/.ssh/config`
3. 将以下内容粘贴进去：
```
Host github.com
    Hostname ssh.github.com
    Port 443
    User git
```
4. 保存退出后，再次尝试 `git push`。如果是因为 22 端口被封，这个方法立竿见影。
::::

**3. 测试SSH连接**
你可以通过以下命令看看 GitHub 是否能认出你： `ssh -T git@github.com`
- 如果提示： `Hi [你的用户名]! You've successfully authenticated...` —— 说明连接通了，刚才可能只是网络瞬间抽风。
- 如果依然提示： `Connection reset` —— 说明你的网络路径上依然有拦截。
- 如果提示： `Permission denied (publickey)` —— 说明你的 SSH 密钥没配置好或者没添加到 GitHub 账户。

## error: Your local changes to the following files would be overwritten by merge
这个错误说明Git发现你在本地修改了某文件，而你正准备拉取的远程更新里也包含了这个文件的改动。为了防止你的本地工作被直接覆盖导致丢失，它选择了报错并停止操作。  
根据你对本地改动的处理意愿，通常有以下三种解决方法：  

**1. 暂时储藏（最推荐）**  

如果你还没准备好提交这些改动，只是想先拉取远程代码。你可以把本地改动暂时“存”起来，拉取完后再拿出来。  
::: steps
1. 储藏本地改动：
```shell
git stash
```
2. 执行拉取：
```shell
git pull --tags origin master
```
3. 恢复储藏的改动：
```shell
git stash pop
```
:::

**方法 2：正式提交**

如果你觉得本地对 PDF 的修改已经完成了，那就直接存入仓库记录。

::: steps
1. 添加文件到暂存区：
```shell
git add docs/homework1/Assign1.pdf
```
2. 提交改动：
```shell
git commit -m "完成作业1的修改"
```
3. 执行拉取：
```shell
git pull --tags origin master
```
> [!note]
> 这可能会触发一个“合并（merge）”提交，你需要输入合并说明。
:::

**方法 3：放弃本地改动（慎用）**  

如果你不想要本地的修改了，觉得 GitHub 上的版本才是对的，可以直接撤销本地更改。注意：撤销后无法找回。

::: steps
1. 撤销指定文件的修改：
```shell
git checkout -- docs/homework1/Assign1.pdf
```
2. 执行拉取：
```shell
git pull --tags origin master
```
:::