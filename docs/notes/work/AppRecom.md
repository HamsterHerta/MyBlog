---
title: 软件推荐
createTime: 2025/11/05 22:52:01
permalink: /work/pjqojhud/
---
**记录在工作学习中好用的软件**

## AI工具
### AI官网
#### Gemini

### AI聚合体
#### CherryStudio

### AI工作流
#### n8n

### AI工具
#### open-notebook
- **简介**：一个开源的笔记本应用程序，支持Markdown，类似google LLMnotbook。
- **项目地址**：[open-notebook](https://github.com/lfnovo/open-notebook)
- **本地部署**：
  - Docker：[Docker部署文档](https://www.zdoc.app/zh/lfnovo/open-notebook)

:::: steps
1. **创建项目目录**
创建并进入文件夹
```
mkdir open-notebook
cd open-notebook
```

2. **创建配置文件**
```
touch docker-compose.yml
```
配置文件内容为：
```
services:
  open_notebook:
    image: lfnovo/open_notebook:v1-latest-single
    ports:
      - "8502:8502"
      - "5055:5055"
    environment:
      - OPENAI_API_KEY=你的密钥
      - SURREAL_URL=ws://localhost:8000/rpc
      - SURREAL_USER=root
      - SURREAL_PASSWORD=root
      - SURREAL_NAMESPACE=open_notebook
      - SURREAL_DATABASE=production
    volumes:
      - ./notebook_data:/app/data
      - ./surreal_data:/mydata
    restart: always
```

3. **启动Docker**  
运行  
```
docker-compose up -d
```
即可启动所有服务。这种方式便于版本管理、一键启停和配置复用。  

4. **访问**  
浏览器访问地址`http://localhost:8502` 
::::

#### nanobot
- **简介**：用4000行代码实现Clawbot的基本功能
- **项目地址**：[nanobot](https://github.com/HKUDS/nanobot)
- **备注**：该项目的开发者主页还有很多值得学习的项目[HKUDS](https://github.com/HKUDS)

## 知识聚合类
### build-your-own-x
- **简介**：教你手搓各种软件
- **项目地址**：[build-your-own-x](https://github.com/codecrafters-io/build-your-own-x)
### freeCodeCamp
- **简介**：一个免费的在线编程学习平台
- **项目地址**：[freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp)
### Web-Dev-For-Beginners
- **简介**：一个适合初学者的Web开发教程
- **项目地址**：[Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners)
### ML-For-Beginners
- **简介**：一个适合初学者的机器学习教程
- **项目地址**：[ML-For-Beginners](https://github.com/microsoft/ML-For-Beginners)
### galaxy
- **简介**：一个丰富的UI库
- **项目地址**：[galaxy](https://github.com/uiverse-io/galaxy)

## 信息流
### folo

### News Minimalist

### MrRss
- **简介**：一个好用的RSS阅读器
- **项目地址**：[MrRss](https://github.com/WCY-dt/MrRss)

## 好用工具
### Stirling-PDF
- **简介**：开源、本地部署的PDF工具，方便快速地对PDF合并、拆分、格式转换等。
- **项目地址**：[Stirling-PDF](https://github.com/Stirling-Tools/Stirling-PDF)
- **本地部署**：
  - Docker:[Docker部署文档](https://docs.stirlingpdf.com/Installation/Docker%20Install/)

:::: steps
1. **创建Docker配置文件**
  创建文件`docker-compose.yml`:
   ``` shell
   version: '3.3'
   services:
     stirling-pdf:
       image: stirlingtools/stirling-pdf:latest
       container_name: stirling-pdf
       ports:
         - '8080:8080'
       volumes:
         - ./stirling-data:/configs
       restart: unless-stopped
   ```

2. **拉取Docker镜像**

  在`docker-compose.yml`的同目录下：
   ``` shell
   docker-compose up -d
   ```

3. **本地运行**
  
  浏览器中打开`http://localhost:8080`

::::

### PDFMathTranslate
- **简介**：开源、本地部署的文档翻译工具，保留文档原有格式
- **项目地址**：[PDFMathTranslate](https://github.com/PDFMathTranslate/PDFMathTranslate)
- **本地部署**：
  - Docker：
:::: steps
1. **镜像拉取**
```shell
docker pull byaidu/pdf2zh
```
2. **镜像启动**
```shell
docker run -d -p 7860:7860 byaidu/pdf2zh
```
3. **运行**

在浏览器中打开`http://localhost:7860/`

::::


## 笔记软件
### obsidian
- **简介**：基于markdown的本地化全能笔记软件
- **优点**：本地化，免费，功能齐全，插件丰富
- **缺点**：上手难度大

### iA Writer
- **简介**：简单的markdown笔记软件
- **优点**：界面简洁优雅，易上手；适合小说正文写作
- **缺点**：付费，自定义和功能较少，只支持最基础的md语法

### NoteGen
- **简介**：AI加持的markdown笔记软件

## 效率工具
### Dayflow
- **简介**：一个基于AI的录屏日程工作分析软件
- **功能**：软件会生成每秒一帧的截图，并根据屏幕截图由AI分析这段时间的屏幕活动，最后会给出每日日志
- **优点**：可以方便地追踪每时刻的工作娱乐活动，自动分析工作内容
- **缺点**：隐私问题，软件仍在开发中，有许多功能还未开放

## 终端工具
### pomo
- **简介**：一个开源、运行在终端的番茄钟软件
- **项目地址**：[pomo](https://github.com/Bahaaio/pomo)
- **优点**：简洁高效，运行在终端，资源占用少。功能较少但比较全面，并且有统计功能
- **缺点**：功能较少，不支持自定义

### yazi
- **简介**：一个命令行文件系统
- **项目地址**：[yazi](https://github.com/sxyazi/yazi)
- **优点**：

### hours
- **简介**：一个命令行时间管理工具
- **项目地址**：[hours](https://github.com/dhth/hours)
- **优点**：简洁高效，运行在终端，资源占用少。功能较少但比较全面，并且有统计功能
- **缺点**：功能较少，不支持自定义

### mole  
- **简介**：一个命令行mac清理工具
- **项目地址**：[mole](https://github.com/app111/mole)
- **优点**：简单快速地清理mac中的垃圾。也可以方便地卸载软件。

### surge  
- **简介**：终端下载工具
- **项目地址**：[surge](https://github.com/surge-downloader/surge)
- **优点**：操作简单，界面优美，支持将文件分割成多个部分，然后并行下载。

## 开源博客
### 2025-blog-public
- **简介**：一个美观的开源博客项目
- **项目地址**：[2025-blog-public](https://github.com/YYsuni/2025-blog-public/)

## 好玩的项目
### GreemWall
- **简介**：给你的github contribution“刷绿墙”，还可以自定义形状
- **项目地址**：[GreemWall](https://github.com/username/GreemWall)
