---
title: 深度学习备忘录
createTime: 2025/12/04 21:32:21
permalink: /work/wni314tk/
---
## python环境配置

### 报错处理
#### No module named 'tf_keras'
在确定已经安装tensorflow和keras后，仍出现该问题，可参考这篇讨论[Error while importing tf_keras](https://github.com/keras-team/tf-keras/issues/676 )。
安装tf-keras包，或tf-keras-nightly包来解决。

#### No module named 'tensorflow.keras'
==未解决==，将`tensorflow.keras`改为`keras`，不会报错。但不清楚是否有后续问题。
明天试试用pip安装对应版本的包
