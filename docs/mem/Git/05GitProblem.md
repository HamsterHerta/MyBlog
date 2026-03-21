---
title: Git常见问题
createTime: 2026/03/02 17:06:39
permalink: /mem/x29yn0s4/
---
## 在一台电脑上管理2个github账号
要在同一台电脑上优雅地管理两个 GitHub 账号（比如 `A` 和 `B`），最标准且一劳永逸的方法是通过 **SSH Config 分离身份**。

::: steps
1. **第一步：为两个账号生成独立的 SSH Key**

如果你已经有了一对密钥，建议为第二个账号专门生成一对新的，并起个好辨认的名字。
    
```bash
ssh-keygen -t ed25519 -C "A@gmail.com" -f ~/.ssh/id_rsa_a
```  

```bash
ssh-keygen -t ed25519 -C "B@gmail.com" -f ~/.ssh/id_rsa_b
```

*(注：生成的公钥* `.pub` *文件需要分别添加到对应 GitHub 账号的 Settings -> SSH keys 中)*

---

2. **第二步：配置 `~/.ssh/config` (核心步骤)**

这是让 Git 自动选择“正确钥匙”的关键。修改你的配置文件： `vim ~/.ssh/config`

输入以下内容：

```text
# 账号一：A (作为默认)
Host github.com
    Hostname ssh.github.com
    Port 443
    User git
    IdentityFile ~/.ssh/id_rsa_a
    IdentitiesOnly yes

# 账号二：B (使用别名)
Host github-b
    Hostname ssh.github.com
    Port 443
    User git
    IdentityFile ~/.ssh/id_rsa_b
    IdentitiesOnly yes
```

**关键点：** 我们给第二个账号起了一个“别名”叫 `github-b`。

---

3. **第三步：修改仓库的远程连接地址**

配置好别名后，你需要告诉本地仓库：这个项目应该通过哪个“别名”去连接。

**进入账号 B 的项目目录：**
    
**修改远程地址：** 如果你之前的地址是 `git@github.com:Example/repo.git`，你需要把它改成：
    

```bash
git remote set-url origin git@github-b:Example/repo.git
```

> [!note]
> 注意：我们将`@`后面的`github.com`改成了配置文件里的别名`github-b`。
 
**对于账号 A 的项目：** 因为它使用的是默认的 `Host github.com`，所以不需要改地址，直接 push 即可。

---

1. **第四步：设置本地仓库的 User Name 和 Email**

SSH Key 只负责“能不能推上去”，而 Git 提交记录里的头像和名字是由 `user.email` 决定的。

不要使用 `git config --global`（这会影响全局），要在每个项目目录下单独设置：

```bash
# 在 A 的项目中
git config user.name "A"
git config user.email "A@gmail.com"

# 在 B 的项目中
git config user.name "B"
git config user.email "B@gmail.com"

```
:::

### 总结：日常怎么用？

1.  **新克隆仓库时：**
    -  如果是 A 账号的：`git clone git@github.com:A/repo.git`
    -  如果是 B 账号的：`git clone git@github-b:B/repo.git` (记得改主机名)
    
2.  **为什么这样有效？** 当 Git 看到 `github-b` 时，它会去 SSH Config 里找对应的 `IdentityFile`（即 `id_rsa_b`），从而以 `B` 的身份进行验证。

## 配置用户名和邮箱
### 全局配置
```shell
git config --global user.name "yourname"
git config --global user.email "youremail@example.com"
```
### 本地配置（针对单个仓库）
```shell
git config user.name "yourname"
git config user.email "youremail@example.com"
```