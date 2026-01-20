---
title: SSH
createTime: 2025/12/08 10:19:34
permalink: /work/xsul2n4i/
---
## mac和win通过ssh互联
### 前置条件
#### 1. ip查看
- win查看ip地址
```shell
ipconfig
```
选择`无线局域网WLAN：IPv4地址`
- mac查看ip地址
进入`设置->Wi-Fi->已连接网络‘详细信息’->IP地址`，查看ip地址

#### 2. 关闭防火墙
- win关闭防火墙
在`控制面板->系统和安全->Windows Defender防火墙->自定义设置`中，关闭专用网络和公用网络的防火墙。
- mac关闭防火墙
转到`设置->网络`，可以看到防火墙是默认打开的，这里关闭即可

此时再互相ping发现可以ping通

### win端ssh连接mac
mac上默认安装了ssh服务，但是没有启用
转到设置->通用->共享，打开远程登录即可
此时可以在终端中验证：
```shell
sudo systemsetup -getremotelogin
```
输出为`Remote Login: On`即表示成功开启

或者直接使用命令开启：
```shell
sudo systemsetup -setremotelogin on
```
此时可以用ssh连接到你的Mac

在win上下载ssh客户端工具，这里使用Termius，普通版并不收费，同时自带sftp工具
端口号默认是22，输入ip、用户名、密码即可

### mac端ssh连接win
进入`设置->应用->可选功能->添加可选功能->OpenSSH服务器`，下载即可
提供另一种方式手动安装：转到[OpenSSH](https://github.com/PowerShell/Win32-OpenSSH/releases)，下载其中的OpenSSH-Win64.zip，解压至指定位置
运行服务：
```shell
powershell.exe -ExecutionPolicy Bypass -File install-sshd.ps1
#要在管理员权限下运行
```
成功会提示三个成功！之后启动sshd服务:
```shell
net start sshd
```
到此服务已经安装完毕，默认端口一是22，默认用户名密码为Window用户名和密码


## 参考资料
1. [局域网下mac与win通过ssh互联(端口映射)](https://blog.csdn.net/m0_57538148/article/details/129208943)
