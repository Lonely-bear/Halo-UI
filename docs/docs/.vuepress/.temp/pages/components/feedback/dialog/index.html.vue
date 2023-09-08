<template><div><h1 id="dialog-确认弹窗" tabindex="-1"><a class="header-anchor" href="#dialog-确认弹窗" aria-hidden="true">#</a> dialog 确认弹窗</h1>
<hr>
<h3 class="h-3">Props</h3>
<table>
<thead>
<tr>
<th>NAME</th>
<th>TYPE</th>
<th>VALUE</th>
<th>DEFAULT</th>
<th>TIPS</th>
</tr>
</thead>
<tbody>
<tr>
<td>model_value</td>
<td>-</td>
<td>-</td>
<td>''</td>
<td>绑定变量</td>
</tr>
<tr>
<td>type</td>
<td>Object-tyep</td>
<td>同原生input type</td>
<td>'text'</td>
<td>输入框类型</td>
</tr>
<tr>
<td>style</td>
<td>String</td>
<td>String</td>
<td>''</td>
<td>输入框样式</td>
</tr>
<tr>
<td>placeholder</td>
<td>String</td>
<td>String</td>
<td>''</td>
<td>缺省值</td>
</tr>
</tbody>
</table>
<hr>
<h3 class="h-3">演示及示例代码</h3>
<HCollapse title="普通使用" collapse-title="示例代码" style="width: 100%;">
<HDialogCard />
<template #collapseContent>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> HDialog<span class="token punctuation">,</span> HButton<span class="token punctuation">,</span> Message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./package'</span>
<span class="token keyword">const</span> show <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  show<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">onConfirm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'点击了确定'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'success'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">onCancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'点击了取消'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'danger'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>open<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    打开遮罩层
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HDialog</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>show<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标题<span class="token punctuation">"</span></span> <span class="token attr-name">@confirm</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onConfirm<span class="token punctuation">"</span></span> <span class="token attr-name">@cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onCancel<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      北欧神话，又称挪威神话（英语：Norse
      Mythology），是斯堪的纳维亚地区所特有的一个神话体系，其形成时间晚于世界上其他几大神话体系，其口头传播历史可追溯到公元1-2世纪，首先在挪威、丹麦和瑞典等地方流行，公元7世纪左右随着一批北上的移民传至冰岛等处。
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HLink</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.baidu.com/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>www.baidu.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HLink</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HDialog</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
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