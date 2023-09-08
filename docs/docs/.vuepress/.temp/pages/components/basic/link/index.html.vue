<template><div><h1 id="link-链接" tabindex="-1"><a class="header-anchor" href="#link-链接" aria-hidden="true">#</a> link 链接</h1>
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
<td>type</td>
<td>String</td>
<td>default/primary/success/danger</td>
<td>default</td>
<td>主题类型</td>
</tr>
<tr>
<td>underline</td>
<td>Boolean</td>
<td>true/false</td>
<td>true</td>
<td>是否有下划线</td>
</tr>
<tr>
<td>disabled</td>
<td>Boolean</td>
<td>true/false</td>
<td>false</td>
<td>是否禁用</td>
</tr>
<tr>
<td>href</td>
<td>String</td>
<td>Url</td>
<td>''</td>
<td>跳转链接</td>
</tr>
</tbody>
</table>
<hr>
<h3 class="h-3">演示及示例代码</h3>
<HCollapse title="普通跳转链接" collapse-title="示例代码" style="width: 100%;">
<HLink href="https://www.baidu.com/">Default</HLink>
<template #collapseContent>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HLink</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.baidu.com/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HLink</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</HCollapse>
<HCollapse title="不同主题样式" collapse-title="示例代码" style="width: 100%;">
<HLink type="default">Default</HLink>
<HLink type="primary">Primary</HLink>
<HLink type="success">Success</HLink>
<HLink type="danger">Danger</HLink>
<template #collapseContent>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HLink</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HLink</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HLink</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HLink</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HLink</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HLink</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HLink</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HLink</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</HCollapse>
<HCollapse title="禁用链接" collapse-title="示例代码" style="width: 100%;">
<HLink type="default" disabled>Default</HLink>
<HLink type="primary" disabled>Primary</HLink>
<HLink type="success" disabled>Success</HLink>
<HLink type="danger" disabled>Danger</HLink>
<template #collapseContent>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HLink</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>Default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HLink</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HLink</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>Primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HLink</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HLink</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>Success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HLink</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HLink</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>Danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HLink</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</HCollapse>
</div></template>



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