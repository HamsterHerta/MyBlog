<template><div><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2>
<p>mermaid是一种用于绘图的标记语言，使用者可以用简单的代码制作常见的图表，如流程图、循序图、类图、状态图、关系图等。同时，mermaid还提供了<a href="https://mermaid.js.org/syntax/flowchart.html#styling-links" target="_blank" rel="noopener noreferrer">在线编辑网站</a>，可以方便地导出对应图像。
在markdown中，一般使用以下代码使用mermaid：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>```mermaid</span></span>
<span class="line"><span>&#x3C;!-- 在此处放置 mermaid 代码 --></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="流程图" tabindex="-1"><a class="header-anchor" href="#流程图"><span>流程图</span></a></h2>
<h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>---</span></span>
<span class="line"><span>title: Node with text</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>flowchart LR</span></span>
<span class="line"><span>  markdown["`This **is** _Markdown_`"]</span></span>
<span class="line"><span>  newLines["`Line 1</span></span>
<span class="line"><span>  Line 2</span></span>
<span class="line"><span>  Line 3`"]</span></span>
<span class="line"><span>  markdown --> newLines</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><Mermaid code="eJzT1dXlKsksyUm1UvDLT0lVKM8syVAoSa0o4QLJpOXklydnJBaVKPgEcSko5CYWZafkl+dFKyWEZGQWK2hpZRZraSnE+0LF4xOUYoHK8lLLfTLzUouBykC0giFQDMwwgjGMIQph5ino6trBdXEBAFhzLX8="></Mermaid><div class="hint-container note">
<p class="hint-container-title">注</p>
<p>ceshi</p>
</div>
<h3 id="节点" tabindex="-1"><a class="header-anchor" href="#节点"><span>节点</span></a></h3>
<h3 id="连接" tabindex="-1"><a class="header-anchor" href="#连接"><span>连接</span></a></h3>
<h3 id="排列布局" tabindex="-1"><a class="header-anchor" href="#排列布局"><span>排列布局</span></a></h3>
</div></template>


