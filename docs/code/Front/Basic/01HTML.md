---
title: HTML
createTime: 2025/07/23 23:59:21
permalink: /code/rqmh10du/
---
## HTML介绍

HTML（HyperText Markup Language）是用于创建和设计网页的标准标记语言。它描述了网页的结构和内容，使用一系列的标签来定义网页的各个部分。

## 基本语法

HTML文档由一系列的元素组成，每个元素由开始标签、内容和结束标签组成。以下是一些常见的HTML元素和它们的用法：

### 头部 (`<head>`)

`<head>` 元素是所有头部元素的容器。头部元素用于定义文档的元数据，不会在页面上显示，但对浏览器和搜索引擎很重要。

```html
<head>
  <meta charset="UTF-8">
  <title>文档标题</title>
  <link rel="stylesheet" href="style.css">
  <script src="script.js"></script>
</head>
```

### 文本元素

-   `<h1>` - `<h6>`: 标题标签，`<h1>` 定义最大的标题，`<h6>` 定义最小的标题。
-   `<p>`: 段落标签。
-   `<br>`: 换行标签。
-   `<hr>`: 水平线。
-   `<strong>` 和 `<b>`: `<strong>` 用于强调重要性，`<b>` 只是加粗。
-   `<em>` 和 `<i>`: `<em>` 用于强调文本，`<i>` 只是斜体。

### 链接 (`<a>`)

`<a>` 标签定义超链接，用于从一个页面链接到另一个页面。`href` 属性是必需的，指定链接的目标 URL。

```html
<a href="https://www.runoob.com">访问菜鸟教程</a>
```

### 图片 (`<img>`)

`<img>` 标签用于在网页中嵌入图像。`src` 属性是必需的，指定图像的路径。`alt` 属性为图像提供替代文本。

```html
<img src="image.jpg" alt="替代文本" width="100" height="100">
```

### 列表

-   **无序列表 (`<ul>`)**: 使用 `<li>` 元素定义列表项。
    ```html
    <ul>
      <li>项目 1</li>
      <li>项目 2</li>
    </ul>
    ```
-   **有序列表 (`<ol>`)**: 列表项将使用数字进行标记。
    ```html
    <ol>
      <li>第一项</li>
      <li>第二项</li>
    </ol>
    ```

### 表格 (`<table>`)

表格由 `<table>` 标签来定义。每个表格均有若干行（由 `<tr>` 标签定义），每行被分割为若干单元格（由 `<td>` 标签定义）。

```html
<table border="1">
  <thead>
    <tr>
      <th>姓名</th>
      <th>年龄</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>张三</td>
      <td>25</td>
    </tr>
    <tr>
      <td>李四</td>
      <td>30</td>
    </tr>
  </tbody>
</table>
```

### 表单 (`<form>`)

`<form>` 元素用于为用户输入创建 HTML 表单。表单可以包含各种输入元素。

```html
<form action="/submit-form" method="post">
  <label for="username">用户名:</label><br>
  <input type="text" id="username" name="username"><br>
  <label for="password">密码:</label><br>
  <input type="password" id="password" name="password"><br><br>
  <input type="submit" value="提交">
</form>
```

### CSS 样式

有三种方式可以将 CSS 添加到 HTML 中：

1.  **内联样式 (Inline CSS)**: 在 HTML 元素中使用 `style` 属性。
    ```html
    <p style="color:blue; text-align:center;">这是一个段落。</p>
    ```
2.  **内部样式表 (Internal CSS)**: 在 `<head>` 部分的 `<style>` 元素中定义。
    ```html
    <head>
      <style>
        body {
          background-color: lightblue;
        }
        p {
          color: navy;
        }
      </style>
    </head>
    ```
3.  **外部样式表 (External CSS)**: 使用 `<link>` 元素链接到外部 CSS 文件。
    ```html
    <head>
      <link rel="stylesheet" type="text/css" href="mystyle.css">
    </head>
    ```


## 简单示例

以下是一个更全面的HTML示例，展示了包括文本、链接、图片、列表和表格的网页结构：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>综合示例页面</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
        }
        th, td {
            padding: 10px;
        }
    </style>
</head>
<body>

    <h1>欢迎来到我的综合示例页面</h1>

    <h2>这是一个关于HTML的页面</h2>
    <p>这是一个段落，介绍了HTML的基本元素。 <strong>HTML</strong> 是构建网页的<em>基础</em>。</p>

    <h3>链接</h3>
    <p>这是一个指向外部网站的链接：<a href="https://www.runoob.com" target="_blank">菜鸟教程</a>。</p>

    <h3>图片</h3>
    <p>下面是一张图片：</p>
    <img src="https://www.runoob.com/wp-content/uploads/2013/06/image-1.png" alt="示例图片" width="200">

    <h3>列表</h3>
    <h4>无序列表</h4>
    <ul>
        <li>苹果</li>
        <li>香蕉</li>
        <li>樱桃</li>
    </ul>

    <h4>有序列表</h4>
    <ol>
        <li>第一步</li>
        <li>第二步</li>
        <li>第三步</li>
    </ol>

    <h3>表格</h3>
    <table>
        <thead>
            <tr>
                <th>产品</th>
                <th>价格</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>笔记本电脑</td>
                <td>$1200</td>
            </tr>
            <tr>
                <td>智能手机</td>
                <td>$800</td>
            </tr>
        </tbody>
    </table>

</body>
</html>
```
