<template><div><h1 id="badge-徽标" tabindex="-1"><a class="header-anchor" href="#badge-徽标" aria-hidden="true">#</a> badge 徽标</h1>
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
<td>value</td>
<td>String/Number</td>
<td>String/Number</td>
<td>''</td>
<td>徽标内容</td>
</tr>
<tr>
<td>color</td>
<td>String</td>
<td>String</td>
<td>'f56c6c'</td>
<td>徽标颜色</td>
</tr>
<tr>
<td>textColor</td>
<td>String</td>
<td>String</td>
<td>'#ffffff'</td>
<td>文字颜色</td>
</tr>
<tr>
<td>max</td>
<td>Number</td>
<td>Number</td>
<td>99</td>
<td>如果为数字，最大值</td>
</tr>
</tbody>
</table>
<hr>
<h3 class="h-3">演示及示例代码</h3>
<HCollapse title="普通使用" collapse-title="示例代码" style="width: 100%;">
<HBadge :value="50">
  <HButton>你看我右上角</HButton>
</HBadge>
<HBadge :value="999">
  <HButton>我太大了，超过99了</HButton>
</HBadge>
<template #collapseContent>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HBadge</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span><span class="token punctuation">></span></span>你看我右上角<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HBadge</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HBadge</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>999<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span><span class="token punctuation">></span></span>我太大了，超过99了<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HBadge</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</HCollapse>
<HCollapse title="文本和红点" collapse-title="示例代码" style="width: 100%;">
<HBadge value="大河之水天上来">
  <HButton>我还能展示文本</HButton>
</HBadge>
<HBadge>
  <HButton>我没有value，就会显示红点</HButton>
</HBadge>
<template #collapseContent>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HBadge</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>大河之水天上来<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span><span class="token punctuation">></span></span>我还能展示文本<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HBadge</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HBadge</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span><span class="token punctuation">></span></span>我没有value，就会显示红点<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HBadge</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
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