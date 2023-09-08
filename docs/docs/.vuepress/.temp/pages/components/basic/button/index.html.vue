<template><div><h1 id="button-按钮" tabindex="-1"><a class="header-anchor" href="#button-按钮" aria-hidden="true">#</a> button 按钮</h1>
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
<td>size</td>
<td>String</td>
<td>large/normal/small/mini</td>
<td>normal</td>
<td>尺寸</td>
</tr>
<tr>
<td>shape</td>
<td>String</td>
<td>default/round/circle</td>
<td>default</td>
<td>形状</td>
</tr>
<tr>
<td>loading</td>
<td>Boolean</td>
<td>true/false</td>
<td>false</td>
<td>加载中状态</td>
</tr>
<tr>
<td>disabled</td>
<td>Boolean</td>
<td>true/false</td>
<td>false</td>
<td>禁用</td>
</tr>
</tbody>
</table>
<hr>
<h3 class="h-3">Slots</h3>
<table>
<thead>
<tr>
<th>NAME</th>
<th>TIPS</th>
</tr>
</thead>
<tbody>
<tr>
<td>default</td>
<td>按钮内容</td>
</tr>
<tr>
<td>prefix</td>
<td>前缀装饰</td>
</tr>
<tr>
<td>suffix</td>
<td>后缀装饰</td>
</tr>
</tbody>
</table>
<hr>
<h3 class="h-3">演示及示例代码</h3>
<HCollapse title="不同主题样式" collapse-title="示例代码" style="width: 100%;">
<HButton type="default">Default</HButton>
<HButton type="primary">Primary</HButton>
<HButton type="success">Success</HButton>
<HButton type="danger">Danger</HButton>
<template #collapseContent>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</HCollapse>
<HCollapse title="不同尺寸样式" collapse-title="示例代码" style="width: 100%;">
<HButton type="primary" size="mini">Mini</HButton>
<HButton type="primary" size="small">Small</HButton>
<HButton type="primary" size="normal">Normal</HButton>
<HButton type="primary" size="large">Large</HButton>
<template #collapseContent>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Mini<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>normal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Normal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Large<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</HCollapse>
<HCollapse title="不同形状样式" collapse-title="示例代码" style="width: 100%;">
<HButton type="primary" shape="default">Default</HButton>
<HButton type="primary" shape="round">Round</HButton>
<HButton type="primary" shape="circle">
    <HIcon name="chrome" />
</HButton>
<template #collapseContent>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>round<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Round<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>circle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HIcon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>chrome<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</HCollapse>
<HCollapse title="加载中样式" collapse-title="示例代码" style="width: 100%;">
<HButton loading>Loading</HButton>
<HButton type="primary" loading>Loading</HButton>
<template #collapseContent>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default<span class="token punctuation">"</span></span> <span class="token attr-name">loading</span><span class="token punctuation">></span></span>Loading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">loading</span><span class="token punctuation">></span></span>Loading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></template>
</HCollapse>
<HCollapse title="禁用样式" collapse-title="示例代码" style="width: 100%;">
<HButton disabled>Disabled</HButton>
<HButton type="danger" disabled>Disabled</HButton>
<template #collapseContent>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>Disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>Disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></template>
</HCollapse>
<HCollapse title="使用插槽" collapse-title="示例代码" style="width: 100%;">
<HButton type="primary">
    <template #prefix>
        <HIcon name="apple" />
    </template>
    这是一个有苹果的按钮
    <template #suffix>
        😀😀😀😀😁😁
    </template>
</HButton>
<template #collapseContent>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#prefix</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HIcon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>apple<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    这是一个有苹果的按钮
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#suffix</span><span class="token punctuation">></span></span>
        😀😀😀😀😁😁
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HButton</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
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