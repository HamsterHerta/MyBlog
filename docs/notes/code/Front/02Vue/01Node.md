---
title: node安装配置
createTime: 2025/07/26 10:50:38
permalink: /code/70f97vhj/
---
## Node 的安装

进入 [node. Js 官网](https://nodejs.org/zh-cn)，下载安装包。根据安装安装提示操作。

MacOS 中 node 的安装位置为 `/usr/local/bin/node`，npm 的安装位置为 `/usr/local/bin/npm`

> [!note]
> Npm 命令前需要加上 sudo

## 配置全局环境

输入命令，将全局安装路径设置为 npm 文件夹：
```shell
sudo npm config set prefix /usr/local/lib/npm
```
这将告诉npm将全局安装的软件包放置在/usr/local/lib/npm目录下。

输入命令，将npm的bin目录添加到系统的PATH环境变量中：
```shell
echo 'export PATH="/usr/local/lib/npm/bin:$PATH"' >> ~/.bash_profile
echo 'export PATH="/usr/local/lib/npm/bin:$PATH"' >> ~/.zshrc
```
输入命令使配置生效（或重启终端）：
```shell
source ~/.bash_profile
```
检查 npm 全局路径是否正确：
```shell
npm config get prefix
```
检查 npm 路径是否在 PATH 环境变量中 
```shell
echo $PATH
```
检查全局安装的软件包是否可用：
```shell
npm list -g
```

## 解决 npm 需要 sudo 的问题

用 npm 下载安装包默认需要 sudo 权限，这会在后续的使用中带来极大的麻烦，因此需要取消命令 `npm -g install` 的 sudo 权限。

由于 npm 默认下载路径需要 sudo 权限，解决方法是新建一个下载文件，并将其写入环境变量中，替代默认下载路径。

1. 创建全局 npm 安装包路径
```shell
mkdir ~/.npm-global
```

2. 配置 npm 使用新路径
```shell
npm config set prefix '~/.npm-global'
```
这里执行的时候,会出现报错，看看命令框提示的解决方案这时你需要修改下文件夹 `~/.npm-global` 权限，否则会报错 error access 13。
![[set prefix.png]]
解决方案是：
```shell
sudo chown -R <用户名> /Users/admin/.npmrc
```

3. 更新环境变量
```shell
echo 'export PATH="/Users/admin/.npm-global/bin:$PATH"' >> ~/.bash_profile
echo 'export PATH="/Users/admin/.npm-global/bin:$PATH"' >> ~/.zshrc
```

此时运行 `npm -g list` 会出现路径错误的报错，这时只要将原始路径（`/usr/local/lib/npm`）中的 lib 和bin 文件移动到 `/Users/admin/.npmrc` 中，或新建相应文件即可。
![[lib.png]]
此时安装 vue 可能会出现如下报错：
![[截屏2025-07-08 22.44.22.png]]
运行提示命令可以解决
```shell
sudo chown -R 501:20 "/Users/admin/.npm"
```

## 更换 npm 源
检查 npm 现在使用的源：
```shell
npm config get registry
```
更换国内源：
```shell
npm config set registry http://registry.npmmirror.com
```

```
npm 官方原始镜像网址是：https://registry.npmjs.org/
淘宝 NPM 镜像：http://registry.npmmirror.com
阿里云 NPM 镜像：https://npm.aliyun.com
腾讯云 NPM 镜像：https://mirrors.cloud.tencent.com/npm/
华为云 NPM 镜像：https://mirrors.huaweicloud.com/repository/npm/
网易 NPM 镜像：https://mirrors.163.com/npm/
中国科学技术大学开源镜像站：http://mirrors.ustc.edu.cn/
清华大学开源镜像站：https://mirrors.tuna.tsinghua.edu.cn/
腾讯，华为，阿里的镜像站基本上比较全
```

## 安装 vue-cli

命令安装 vue:
```shell
npm install -g @vue/cli
```
安装完成后，您可以输入以下命令来验证Vue CLI是否成功安装：
```shell
vue --version
```

## 常用node命令



## 参考文章
1. [MacOS系统安装NodeJS以及配置全局安装路径](https://juejin.cn/post/7277828214246883347)
