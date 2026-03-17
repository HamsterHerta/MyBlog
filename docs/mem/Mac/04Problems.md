---
title: Mac常见问题
createTime: 2025/09/13 18:21:10
permalink: /mem/9z7yrcsl/
---

## 解决Mac安装软件的“已损坏，无法打开。您应该将它移到废纸篓”问题
### 1. 允许“任何来源”开启
苹果从[macOS Sierra](https://zhida.zhihu.com/search?content_id=118342083&content_type=Article&match_order=1&q=macOS+Sierra&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NTc5MzA0NDIsInEiOiJtYWNPUyBTaWVycmEiLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjoxMTgzNDIwODMsImNvbnRlbnRfdHlwZSI6IkFydGljbGUiLCJtYXRjaF9vcmRlciI6MSwiemRfdG9rZW4iOm51bGx9.cw4ku4UXmC1vtcaKskZWKcn59a-ysCR8BN-0Zd-zEOQ&zhida_source=entity) 10.12 开始，已经**去除了允许“任何来源”的选项**，如果不开启“任何来源”的选项，会直接影响到无法运行的第三方应用。

所以开启“任何来源”的方法如下：

打开【启动台】，选择【[终端](https://zhida.zhihu.com/search?content_id=118342083&content_type=Article&match_order=1&q=%E7%BB%88%E7%AB%AF&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NTc5MzA0NDIsInEiOiLnu4jnq68iLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjoxMTgzNDIwODMsImNvbnRlbnRfdHlwZSI6IkFydGljbGUiLCJtYXRjaF9vcmRlciI6MSwiemRfdG9rZW4iOm51bGx9.8KBzG6zktvUsJ6QKiRtzgAL3jjRP_6vdO_78aM66LxE&zhida_source=entity)】，输入：

```shell
sudo spctl  --master-disable
```

然后回车，继续输入密码（密码输入时是不可见的），然后回车。

接着打开【系统偏好设置】，选择【 [安全性与隐私](https://zhida.zhihu.com/search?content_id=118342083&content_type=Article&match_order=1&q=%E5%AE%89%E5%85%A8%E6%80%A7%E4%B8%8E%E9%9A%90%E7%A7%81&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NTc5MzA0NDIsInEiOiLlronlhajmgKfkuI7pmpDnp4EiLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjoxMTgzNDIwODMsImNvbnRlbnRfdHlwZSI6IkFydGljbGUiLCJtYXRjaF9vcmRlciI6MSwiemRfdG9rZW4iOm51bGx9.D4MM72MqET7ACk7PPO1GVTSTDNtCCwzz3WiBqyaGFvM&zhida_source=entity) 】，选择【通用】，可以看到【任何来源】已经选定。

### 2 . 单独安装某一程序
在终端粘贴复制输入命令（注意最后有一个空格）：

```shell
sudo xattr -r -d com.apple.quarantine 
```

**先不要按回车！先不要按回车！先不要按回车！先不要按回车！**

然后打开[访达](https://zhida.zhihu.com/search?content_id=118342083&content_type=Article&match_order=1&q=%E8%AE%BF%E8%BE%BE&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NTc5MzA0NDIsInEiOiLorr_ovr4iLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjoxMTgzNDIwODMsImNvbnRlbnRfdHlwZSI6IkFydGljbGUiLCJtYXRjaF9vcmRlciI6MSwiemRfdG9rZW4iOm51bGx9.0nglaOZM08BfGw6FBrEJmepawLOuSj-9JiCCM_X26Y4&zhida_source=entity)（Finder）进入 **“应用程序”** 目录，找到该软件图标，将图标拖到刚才的终端窗口里面，会得到如下组合(如图所示)：

```shell
sudo xattr -r -d com.apple.quarantine /Applications/SPlayer.app
```

回到终端窗口按回车，输入系统密码回车即可。

## 解决Mac盒盖后无法播放音乐问题
因为苹果为了节能，默认盒盖后开启休眠模式，所以关闭它即可。命令如下：

1. 打开终端，后输入 `sudo pmset -a disablesleep 1` 然后回车，提示输入密码回车。
接下来你就可以尝试盒盖听歌啦。enjoy～
重新开启睡眠模式：`sudo pmset -a disablesleep 0`


## 参考资料
1. [最新｜解决Mac安装软件的“已损坏，无法打开。 您应该将它移到废纸篓”问题](https://zhuanlan.zhihu.com/p/135948430)
2. [解决Mac盒盖后无法播放音乐问题](https://discussionschinese.apple.com/thread/253886010)
