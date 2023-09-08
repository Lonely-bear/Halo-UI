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

# card 卡片

<hr>
<h3 class="h-3">Props</h3>

| NAME        | TYPE    | VALUE      | DEFAULT | TIPS            |
| ----------- | ------- | ---------- | ------- | --------------- |
| title       | String  | String     | ''      | 标题文字        |
| foot        | String  | String     | ''      | 底部文字        |
| hoverShadow | Boolean | true/false | true    | 是否有hover阴影 |

<hr>
<h3 class="h-3">Slots</h3>

| NAME    | TIPS     |
| ------- | -------- |
| default | 卡片内容 |
| title   | 标题文字 |
| foot    | 底部文字 |

<hr>
<h3 class="h-3">演示及示例代码</h3>

<HCollapse title="普通使用" collapse-title="示例代码" style="width: 100%;">
<HCard title="Title" foot="Foot" style="width: 80%;">
  北欧神话，又称挪威神话（英语：Norse Mythology），是斯堪的纳维亚地区所特有的一个神话体系，其形成时间晚于世界上其他几大神话体系，其口头传播历史可追溯到公元1-2世纪，首先在挪威、丹麦和瑞典等地方流行，公元7世纪左右随着一批北上的移民传至冰岛等处。
</HCard>
<template #collapseContent>

```html
<HCard title="Title" foot="Foot" style="width: 80%;">
  北欧神话，又称挪威神话（英语：Norse Mythology），是斯堪的纳维亚地区所特有的一个神话体系，其形成时间晚于世界上其他几大神话体系，其口头传播历史可追溯到公元1-2世纪，首先在挪威、丹麦和瑞典等地方流行，公元7世纪左右随着一批北上的移民传至冰岛等处。
</HCard>
```

</template>
</HCollapse>



<HCollapse title="使用插槽扩展卡片" collapse-title="示例代码" style="width: 100%;">
<HCard style="width: 80%;">
  北欧神话，又称挪威神话（英语：Norse Mythology），是斯堪的纳维亚地区所特有的一个神话体系，其形成时间晚于世界上其他几大神话体系，其口头传播历史可追溯到公元1-2世纪，首先在挪威、丹麦和瑞典等地方流行，公元7世纪左右随着一批北上的移民传至冰岛等处。
  <template #title>
    <HButton type="primary">Custom Button</HButton>
  </template>
  <template #foot>
    <HLink type="primary" href="https://www.baidu.com/">https://www.baidu.com/</HLink>
  </template>
</HCard>
<template #collapseContent>

```html
<HCard style="width: 80%;">
  北欧神话，又称挪威神话（英语：Norse Mythology），是斯堪的纳维亚地区所特有的一个神话体系，其形成时间晚于世界上其他几大神话体系，其口头传播历史可追溯到公元1-2世纪，首先在挪威、丹麦和瑞典等地方流行，公元7世纪左右随着一批北上的移民传至冰岛等处。
  <template #title>
    <HButton type="primary">Custom Button</HButton>
  </template>
  <template #foot>
    <HLink type="primary" href="https://www.baidu.com/">https://www.baidu.com/</HLink>
  </template>
</HCard>
```

</template>
</HCollapse>


<HCollapse title="是否显示hover阴影" collapse-title="示例代码" style="width: 100%;">
<HCard title="Title" foot="Foot" :hoverShadow="false" style="width: 80%;">
  北欧神话，又称挪威神话（英语：Norse Mythology），是斯堪的纳维亚地区所特有的一个神话体系，其形成时间晚于世界上其他几大神话体系，其口头传播历史可追溯到公元1-2世纪，首先在挪威、丹麦和瑞典等地方流行，公元7世纪左右随着一批北上的移民传至冰岛等处。
</HCard>
<template #collapseContent>

```html
<HCard title="Title" foot="Foot" :hoverShadow="false" style="width: 80%;">
  北欧神话，又称挪威神话（英语：Norse Mythology），是斯堪的纳维亚地区所特有的一个神话体系，其形成时间晚于世界上其他几大神话体系，其口头传播历史可追溯到公元1-2世纪，首先在挪威、丹麦和瑞典等地方流行，公元7世纪左右随着一批北上的移民传至冰岛等处。
</HCard>
```

</template>
</HCollapse>
