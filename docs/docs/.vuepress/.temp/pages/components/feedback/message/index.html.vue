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
<hr>
<h3 class="h-3">演示及示例代码</h3>
<HCollapse title="普通使用" collapse-title="示例代码" style="width: 100%;">
<HMessageCard />
<template #collapseContent>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> HButton<span class="token punctuation">,</span> Message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../..'</span>

<span class="token keyword">function</span> <span class="token function">onClickPrimary</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'primary'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'这是一条Primary提示消息'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">onClickSuccess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'success'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'这是一条Success提示消息'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">onClickWarning</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'warn'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'这是一条Warn提示消息'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">onClickDanger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'danger'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'这是一条Danger提示消息'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">onClickDark</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">dark</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'success'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'这是一条Dark提示消息'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onClickPrimary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onClickSuccess<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onClickWarning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Warn<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onClickDanger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onClickDark<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Dark<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</HCollapse></div></template>



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