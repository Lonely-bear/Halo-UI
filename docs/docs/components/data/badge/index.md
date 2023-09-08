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

# badge 徽标

<hr>
<h3 class="h-3">Props</h3>

| NAME      | TYPE          | VALUE         | DEFAULT   | TIPS               |
| --------- | ------------- | ------------- | --------- | ------------------ |
| value     | String/Number | String/Number | ''        | 徽标内容           |
| color     | String        | String        | 'f56c6c'  | 徽标颜色           |
| textColor | String        | String        | '#ffffff' | 文字颜色           |
| max       | Number        | Number        | 99        | 如果为数字，最大值 |

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

```html
<HBadge :value="50">
  <HButton>你看我右上角</HButton>
</HBadge>
<HBadge :value="999">
  <HButton>我太大了，超过99了</HButton>
</HBadge>
```

</template>
</HCollapse>



<HCollapse title="文本和红点" collapse-title="示例代码" style="width: 100%;">
<HBadge value="大河之水天上来">
  <HButton>我还能展示文本</HButton>
</HBadge>
<HBadge>
  <HButton>我没有value，就会显示红点</HButton>
</HBadge>
<template #collapseContent>

```html
<HBadge value="大河之水天上来">
  <HButton>我还能展示文本</HButton>
</HBadge>
<HBadge>
  <HButton>我没有value，就会显示红点</HButton>
</HBadge>
```

</template>
</HCollapse>