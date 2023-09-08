<template><div><h1 id="message-消息提示函数" tabindex="-1"><a class="header-anchor" href="#message-消息提示函数" aria-hidden="true">#</a> message 消息提示函数</h1>
<hr>
<h3 class="h-3">Props</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>type</th>
<th>value</th>
<th>decoration</th>
</tr>
</thead>
<tbody>
<tr>
<td>message</td>
<td>String</td>
<td>-</td>
<td>消息内容</td>
</tr>
<tr>
<td>duration</td>
<td>Number</td>
<td>2000</td>
<td>消息显示时长</td>
</tr>
<tr>
<td>type</td>
<td>'primary'/'success'/'danger'/'warn'</td>
<td>'primary'</td>
<td>消息类型</td>
</tr>
<tr>
<td>dark</td>
<td>Boolean</td>
<td>false</td>
<td>暗黑模式</td>
</tr>
<tr>
<td>offset</td>
<td>Number</td>
<td>20</td>
<td>距离顶部位置</td>
</tr>
<tr>
<td>isClose</td>
<td>Boolean</td>
<td>false</td>
<td>是否显示关闭按钮</td>
</tr>
<tr>
<td>onClose</td>
<td>Function</td>
<td>-</td>
<td>关闭时触发事件</td>
</tr>
</tbody>
</table>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'成功刷新！'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'primary'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



<style>
    table {
        width: max-content;
        margin: 1rem auto;
    }
    .h-3 {
        text-decoration: underline;
        text-align:center;
    }
    .badge {
        height: auto;
    }
</style>