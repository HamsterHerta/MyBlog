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

## 信息流
### folo

### News Minimalist

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
