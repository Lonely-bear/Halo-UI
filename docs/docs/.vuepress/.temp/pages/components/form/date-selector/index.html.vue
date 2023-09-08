<template><div><h1 id="date-selector-日期选择器" tabindex="-1"><a class="header-anchor" href="#date-selector-日期选择器" aria-hidden="true">#</a> date-selector 日期选择器</h1>
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
<td>shake</td>
<td>Boolean</td>
<td>true/false</td>
<td>false</td>
<td>是否开启震动反馈</td>
</tr>
<tr>
<td>alwaysShow</td>
<td>Boolean</td>
<td>true/false</td>
<td>false</td>
<td>是否一直展示时间选择器</td>
</tr>
</tbody>
</table>
<hr>
<h3 class="h-3">演示及示例代码</h3>
<HCollapse title="普通使用（需v-model绑定动态数据才能修改数据）" collapse-title="示例代码" style="width: 100%;">
<HDateSelector v-model="dateValue" alwaysShow />
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<template #collapseContent>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HDateSelector</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dateValue<span class="token punctuation">"</span></span> <span class="token attr-name">alwaysShow</span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</HCollapse></div></template>

<script>
let dateValue = ''
</script>

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