<template><div><h2 id="vim工作模式" tabindex="-1"><a class="header-anchor" href="#vim工作模式"><span>vim工作模式</span></a></h2>
<p>vim分为三种模式，命令模式（Command Mode）、输入模式（Insert Mode）和命令行模式（Command-Line Mode）。</p>
<ul>
<li>命令模式（Command Mode）：命令模式是vim的默认模式，用于执行各种命令，如移动光标、删除文本、复制文本等。</li>
<li>输入模式（Insert Mode）：输入模式用于在当前光标位置插入文本。</li>
<li>命令行模式（Command-Line Mode）：命令行模式用于执行命令行命令，如保存文件、退出vim等。</li>
</ul>
<p>当用户启动vim时，会进入命令模式。命令模式下输入字符'i'，进入输入模式。输入模式下按下Esc键，返回命令模式。命令模式下输入字符':',进入命令行模式。命令行模式下输入字符'q',退出vim。</p>
<Mermaid code="eJzT1dXlKsksyUm1UijLzH26femTvXOerVj4dE8/F0iquCSxJNUlMzG9KDFXt8yIK1orVkFX107h6cS9T3YvgSgE61RIy8xJ5UIWBqt7sW/y09alMHWZXMh8LAa5FidjmgEReLGwB6bq/Z5ZUFVwQSxmFWKaBHS9lUJ5IRcAgm6BAQ=="></Mermaid><h2 id="输入模式常用操作" tabindex="-1"><a class="header-anchor" href="#输入模式常用操作"><span>输入模式常用操作</span></a></h2>
<ul>
<li><strong>ENTER</strong>，回车键，换行</li>
<li><strong>BACK SPACE</strong>，退格键，删除光标前一个字符</li>
<li><strong>DEL</strong>，删除键，删除光标后一个字符</li>
<li><strong>方向键</strong>，在文本中移动光标</li>
<li><strong>HOME/END</strong>，移动光标到行首/行尾</li>
<li><strong>Page Up/Page Down</strong>，上/下翻页</li>
</ul>
<h2 id="命令行模式常用操作" tabindex="-1"><a class="header-anchor" href="#命令行模式常用操作"><span>命令行模式常用操作</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">解释</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">:w</td>
<td style="text-align:left">保存当前文件</td>
</tr>
<tr>
<td style="text-align:left">:w!</td>
<td style="text-align:left">若文件属性为『只读』时，强制保存当前文件</td>
</tr>
<tr>
<td style="text-align:left">:q</td>
<td style="text-align:left">退出vim</td>
</tr>
<tr>
<td style="text-align:left">:q!</td>
<td style="text-align:left">强制退出vim</td>
</tr>
<tr>
<td style="text-align:left">:wq</td>
<td style="text-align:left">保存并退出vim</td>
</tr>
<tr>
<td style="text-align:left">:wq!</td>
<td style="text-align:left">强制保存并退出vim</td>
</tr>
<tr>
<td style="text-align:left">ZZ</td>
<td style="text-align:left">如果修改过，保存当前文件，然后退出！效果等同于(保存并退出)</td>
</tr>
<tr>
<td style="text-align:left">ZQ</td>
<td style="text-align:left">不保存，强制退出。效果等同于 :q!。</td>
</tr>
<tr>
<td style="text-align:left">:w [filename]</td>
<td style="text-align:left">将编辑的数据储存成另一个档案（类似另存新档）</td>
</tr>
<tr>
<td style="text-align:left">:r [filename]</td>
<td style="text-align:left">在编辑的数据中，读入另一个档案的数据。亦即将 『filename』 这个档案内容加到游标所在行后面</td>
</tr>
<tr>
<td style="text-align:left">:n1,n2 w [filename]</td>
<td style="text-align:left">将 n1 到 n2 的内容储存成 filename 这个档案。</td>
</tr>
<tr>
<td style="text-align:left">:! command</td>
<td style="text-align:left">暂时离开 vi 到指令行模式下执行 command 的显示结果！例如『:! ls /home』即可在 vi 当中察看 /home 底下以 ls 输出的档案信息！</td>
</tr>
<tr>
<td style="text-align:left">:set nu</td>
<td style="text-align:left">开启行号显示</td>
</tr>
<tr>
<td style="text-align:left">:set nonu</td>
<td style="text-align:left">关闭行号显示</td>
</tr>
</tbody>
</table>
<h2 id="命令模式常用操作" tabindex="-1"><a class="header-anchor" href="#命令模式常用操作"><span>命令模式常用操作</span></a></h2>
<h3 id="光标移动操作" tabindex="-1"><a class="header-anchor" href="#光标移动操作"><span>光标移动操作</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">解释</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">方向键（hjkl）</td>
<td style="text-align:left">光标移动一个字符</td>
</tr>
<tr>
<td style="text-align:left">n方向键（hjkl）</td>
<td style="text-align:left">光标移动n个字符</td>
</tr>
<tr>
<td style="text-align:left">[Ctrl] + [f]</td>
<td style="text-align:left">屏幕『向下』移动一页，相当于 [Page Down]按键 (常用)</td>
</tr>
<tr>
<td style="text-align:left">[Ctrl] + [b]</td>
<td style="text-align:left">屏幕『向上』移动一页，相当于 [Page Up] 按键 (常用)</td>
</tr>
<tr>
<td style="text-align:left">[Ctrl] + [d]</td>
<td style="text-align:left">屏幕『向下』移动半页</td>
</tr>
<tr>
<td style="text-align:left">[Ctrl] + [u]</td>
<td style="text-align:left">屏幕『向上』移动半页</td>
</tr>
<tr>
<td style="text-align:left">n[space]</td>
<td style="text-align:left">光标向右移动这一行的 n 个字符。</td>
</tr>
<tr>
<td style="text-align:left">n[Enter]</td>
<td style="text-align:left">光标向下移动 n 行(常用)</td>
</tr>
<tr>
<td style="text-align:left">0</td>
<td style="text-align:left">或功能键[Home]	移动到这一行的最前面字符处 (常用)</td>
</tr>
<tr>
<td style="text-align:left">$</td>
<td style="text-align:left">或功能键[End]	移动到这一行的最后面字符处(常用)</td>
</tr>
<tr>
<td style="text-align:left">G</td>
<td style="text-align:left">移动到这个档案的最后一行(常用)</td>
</tr>
<tr>
<td style="text-align:left">nG</td>
<td style="text-align:left">移动到这个档案的第 n 行。例如 20G 则会移动到这个档案的第 20 行</td>
</tr>
<tr>
<td style="text-align:left">gg</td>
<td style="text-align:left">移动到这个档案的第一行 (常用)</td>
</tr>
<tr>
<td style="text-align:left">H</td>
<td style="text-align:left">光标移动到这个屏幕的最上方那一行的第一个字符</td>
</tr>
<tr>
<td style="text-align:left">M</td>
<td style="text-align:left">光标移动到这个屏幕的中央那一行的第一个字符</td>
</tr>
<tr>
<td style="text-align:left">L</td>
<td style="text-align:left">光标移动到这个屏幕的最下方那一行的第一个字符</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<h3 id="搜索替换" tabindex="-1"><a class="header-anchor" href="#搜索替换"><span>搜索替换</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">解释</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">/word</td>
<td style="text-align:left">向光标之下，搜索 word 这个字串</td>
</tr>
<tr>
<td style="text-align:left">?word</td>
<td style="text-align:left">向光标之上，搜索 word 这个字串</td>
</tr>
<tr>
<td style="text-align:left">n</td>
<td style="text-align:left">重复上一次的搜索动作，继续向上(/word)或向下(?word)搜索word</td>
</tr>
<tr>
<td style="text-align:left">N</td>
<td style="text-align:left">重复上一次的搜索动作，但方向相反</td>
</tr>
<tr>
<td style="text-align:left">:n1,n2s/word1/word2/g</td>
<td style="text-align:left">在第 n1 与 n2 行之间寻找 word1 这个字符串，并将该字符串取代为 word2</td>
</tr>
<tr>
<td style="text-align:left">:%s/old/new/g</td>
<td style="text-align:left">将整个档案中所有的 old 字串替换为 new 字串</td>
</tr>
</tbody>
</table>
<h3 id="复制粘贴删除" tabindex="-1"><a class="header-anchor" href="#复制粘贴删除"><span>复制粘贴删除</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">解释</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">x,X</td>
<td style="text-align:left">x为向后删除一个字符，X为向前删除一个字符</td>
</tr>
<tr>
<td style="text-align:left">nx</td>
<td style="text-align:left">向后连续删除 n 个字符</td>
</tr>
<tr>
<td style="text-align:left">dd</td>
<td style="text-align:left">剪切游标所在的那一整行(常用)</td>
</tr>
<tr>
<td style="text-align:left">ndd</td>
<td style="text-align:left">剪切光标所在的向下 n 行</td>
</tr>
<tr>
<td style="text-align:left">d1G</td>
<td style="text-align:left">删除光标所在到第一行的所有数据</td>
</tr>
<tr>
<td style="text-align:left">dG</td>
<td style="text-align:left">删除光标所在到最后一行的所有数据</td>
</tr>
<tr>
<td style="text-align:left">d$</td>
<td style="text-align:left">删除光标所在到该行行尾的所有数据</td>
</tr>
<tr>
<td style="text-align:left">d0</td>
<td style="text-align:left">删除光标所在到该行行首的所有数据</td>
</tr>
<tr>
<td style="text-align:left">yy</td>
<td style="text-align:left">复制光标所在的那一整行(常用)</td>
</tr>
<tr>
<td style="text-align:left">nyy</td>
<td style="text-align:left">复制光标所在的向下 n 行</td>
</tr>
<tr>
<td style="text-align:left">y1G; yG; y$; y0</td>
<td style="text-align:left">与d类似</td>
</tr>
<tr>
<td style="text-align:left">p</td>
<td style="text-align:left">粘贴光标所在位置的下一行</td>
</tr>
<tr>
<td style="text-align:left">P</td>
<td style="text-align:left">粘贴光标所在位置的上一行</td>
</tr>
<tr>
<td style="text-align:left">J</td>
<td style="text-align:left">将光标所在行与下一行的数据结合成同一行</td>
</tr>
<tr>
<td style="text-align:left">c</td>
<td style="text-align:left">重复删除多个数据，例如向下删除 10 行[10cj]</td>
</tr>
<tr>
<td style="text-align:left">u</td>
<td style="text-align:left">复原前一个动作(常用)</td>
</tr>
<tr>
<td style="text-align:left">[Ctrl]+r</td>
<td style="text-align:left">重做上一个动作(常用)</td>
</tr>
<tr>
<td style="text-align:left">.</td>
<td style="text-align:left">重复前一个动作的</td>
</tr>
</tbody>
</table>
<h3 id="切换到输入模式" tabindex="-1"><a class="header-anchor" href="#切换到输入模式"><span>切换到输入模式</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">解释</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">i, I</td>
<td style="text-align:left">插入光标所在位置的前一个字符</td>
</tr>
<tr>
<td style="text-align:left">a, A</td>
<td style="text-align:left">插入光标所在位置的后一个字符</td>
</tr>
<tr>
<td style="text-align:left">o</td>
<td style="text-align:left">在光标所在行的下一行插入一行</td>
</tr>
<tr>
<td style="text-align:left">O</td>
<td style="text-align:left">在光标所在行的上一行插入一行</td>
</tr>
</tbody>
</table>
<h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>
<p>[1] <a href="https://www.runoob.com/linux/linux-vim.html" target="_blank" rel="noopener noreferrer">Linux vi/vim</a></p>
</div></template>


