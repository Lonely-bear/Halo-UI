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

# button 按钮

<hr>
<h3 class="h-3">Props</h3>

| NAME     | TYPE    | VALUE                          | DEFAULT | TIPS       |
| -------- | ------- | ------------------------------ | ------- | ---------- |
| type     | String  | default/primary/success/danger | default | 主题类型   |
| size     | String  | large/normal/small/mini        | normal  | 尺寸       |
| shape    | String  | default/round/circle           | default | 形状       |
| loading  | Boolean | true/false                     | false   | 加载中状态 |
| disabled | Boolean | true/false                     | false   | 禁用       |

<hr>
<h3 class="h-3">Slots</h3>

| NAME    | TIPS     |
| ------- | -------- |
| default | 按钮内容 |
| prefix  | 前缀装饰 |
| suffix  | 后缀装饰 |

<hr>
<h3 class="h-3">演示及示例代码</h3>

<HCollapse title="不同主题样式" collapse-title="示例代码" style="width: 100%;">
<HButton type="default">Default</HButton>
<HButton type="primary">Primary</HButton>
<HButton type="success">Success</HButton>
<HButton type="danger">Danger</HButton>
<template #collapseContent>

```html
<HButton type="default">Default</HButton>
<HButton type="primary">Primary</HButton>
<HButton type="success">Success</HButton>
<HButton type="danger">Danger</HButton>
```

</template>
</HCollapse>


<HCollapse title="不同尺寸样式" collapse-title="示例代码" style="width: 100%;">
<HButton type="primary" size="mini">Mini</HButton>
<HButton type="primary" size="small">Small</HButton>
<HButton type="primary" size="normal">Normal</HButton>
<HButton type="primary" size="large">Large</HButton>
<template #collapseContent>

```html
<HButton type="primary" size="mini">Mini</HButton>
<HButton type="primary" size="small">Small</HButton>
<HButton type="primary" size="normal">Normal</HButton>
<HButton type="primary" size="large">Large</HButton>
```

</template>
</HCollapse>


<HCollapse title="不同形状样式" collapse-title="示例代码" style="width: 100%;">
<HButton type="primary" shape="default">Default</HButton>
<HButton type="primary" shape="round">Round</HButton>
<HButton type="primary" shape="circle">
    <HIcon name="chrome" />
</HButton>
<template #collapseContent>

```html
<HButton type="primary" shape="default">Default</HButton>
<HButton type="primary" shape="round">Round</HButton>
<HButton type="primary" shape="circle">
    <HIcon name="chrome" />
</HButton>
```

</template>
</HCollapse>



<HCollapse title="加载中样式" collapse-title="示例代码" style="width: 100%;">
<HButton loading>Loading</HButton>
<HButton type="primary" loading>Loading</HButton>
<template #collapseContent>

```html
<HButton shape="default" loading>Loading</HButton>
<HButton type="primary" loading>Loading</HButton>
```

</template>
</HCollapse>




<HCollapse title="禁用样式" collapse-title="示例代码" style="width: 100%;">
<HButton disabled>Disabled</HButton>
<HButton type="danger" disabled>Disabled</HButton>
<template #collapseContent>

```html
<HButton disabled>Disabled</HButton>
<HButton type="danger" disabled>Disabled</HButton>
```

</template>
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

```html
<HButton type="primary">
    <template #prefix>
        <HIcon name="apple" />
    </template>
    这是一个有苹果的按钮
    <template #suffix>
        😀😀😀😀😁😁
    </template>
</HButton>
```

</template>
</HCollapse>