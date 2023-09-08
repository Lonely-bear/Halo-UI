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

# link 链接

<hr>
<h3 class="h-3">Props</h3>

| NAME      | TYPE    | VALUE                          | DEFAULT | TIPS         |
| --------- | ------- | ------------------------------ | ------- | ------------ |
| type      | String  | default/primary/success/danger | default | 主题类型     |
| underline | Boolean | true/false                     | true    | 是否有下划线 |
| disabled  | Boolean | true/false                     | false   | 是否禁用     |
| href      | String  | Url                            | ''      | 跳转链接     |

<hr>
<h3 class="h-3">演示及示例代码</h3>

<HCollapse title="普通跳转链接" collapse-title="示例代码" style="width: 100%;">
<HLink href="https://www.baidu.com/">Default</HLink>
<template #collapseContent>

```html
<HLink href="https://www.baidu.com/">Default</HLink>
```

</template>
</HCollapse>

<HCollapse title="不同主题样式" collapse-title="示例代码" style="width: 100%;">
<HLink type="default">Default</HLink>
<HLink type="primary">Primary</HLink>
<HLink type="success">Success</HLink>
<HLink type="danger">Danger</HLink>
<template #collapseContent>

```html
<HLink type="default">Default</HLink>
<HLink type="primary">Primary</HLink>
<HLink type="success">Success</HLink>
<HLink type="danger">Danger</HLink>
```

</template>
</HCollapse>



<HCollapse title="禁用链接" collapse-title="示例代码" style="width: 100%;">
<HLink type="default" disabled>Default</HLink>
<HLink type="primary" disabled>Primary</HLink>
<HLink type="success" disabled>Success</HLink>
<HLink type="danger" disabled>Danger</HLink>
<template #collapseContent>

```html
<HLink type="default" disabled>Default</HLink>
<HLink type="primary" disabled>Primary</HLink>
<HLink type="success" disabled>Success</HLink>
<HLink type="danger" disabled>Danger</HLink>
```

</template>
</HCollapse>
