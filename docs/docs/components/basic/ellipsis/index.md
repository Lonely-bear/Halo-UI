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

# ellipsis 多余文本显示省略号

<hr>
<h3 class="h-3">Props</h3>

| NAME     | TYPE    | VALUE      | DEFAULT | TIPS         |
| -------- | ------- | ---------- | ------- | ------------ |
| content  | String  | String     | ''      | 内容         |
| line     | Number  | Number     | 1       | 行数         |
| width    | String  | String     | 100%    | 宽度         |
| showMore | Boolean | true/false | false   | 是否显示更多 |

<hr>
<h3 class="h-3">演示及示例代码</h3>

<HCollapse title="普通使用" collapse-title="示例代码" style="width: 100%;">
<HEllipsis content="北欧神话，又称挪威神话（英语：Norse Mythology），是斯堪的纳维亚地区所特有的一个神话体系，其形成时间晚于世界上其他几大神话体系，其口头传播历史可追溯到公元1-2世纪，首先在挪威、丹麦和瑞典等地方流行，公元7世纪左右随着一批北上的移民传至冰岛等处。" width="60%" />
<template #collapseContent>

```html
<HEllipsis content="北欧神话，又称挪威神话（英语：Norse Mythology），是斯堪的纳维亚地区所特有的一个神话体系，其形成时间晚于世界上其他几大神话体系，其口头传播历史可追溯到公元1-2世纪，首先在挪威、丹麦和瑞典等地方流行，公元7世纪左右随着一批北上的移民传至冰岛等处。" width="60%" />
```

</template>
</HCollapse>


<HCollapse title="限制宽度及行数" collapse-title="示例代码" style="width: 100%;">
<HEllipsis content="北欧神话，又称挪威神话（英语：Norse Mythology），是斯堪的纳维亚地区所特有的一个神话体系，其形成时间晚于世界上其他几大神话体系，其口头传播历史可追溯到公元1-2世纪，首先在挪威、丹麦和瑞典等地方流行，公元7世纪左右随着一批北上的移民传至冰岛等处。" width="60%" :line="3" />
<template #collapseContent>

```html
<HEllipsis content="北欧神话，又称挪威神话（英语：Norse Mythology），是斯堪的纳维亚地区所特有的一个神话体系，其形成时间晚于世界上其他几大神话体系，其口头传播历史可追溯到公元1-2世纪，首先在挪威、丹麦和瑞典等地方流行，公元7世纪左右随着一批北上的移民传至冰岛等处。" width="60%" :line="3" />
```

</template>
</HCollapse>

<HCollapse title="鼠标悬浮展示全部内容" collapse-title="示例代码" style="width: 100%;">
<HEllipsis content="北欧神话，又称挪威神话（英语：Norse Mythology），是斯堪的纳维亚地区所特有的一个神话体系，其形成时间晚于世界上其他几大神话体系，其口头传播历史可追溯到公元1-2世纪，首先在挪威、丹麦和瑞典等地方流行，公元7世纪左右随着一批北上的移民传至冰岛等处。" width="60%" :line="3" showMore />
<template #collapseContent>

```html
<HEllipsis content="北欧神话，又称挪威神话（英语：Norse Mythology），是斯堪的纳维亚地区所特有的一个神话体系，其形成时间晚于世界上其他几大神话体系，其口头传播历史可追溯到公元1-2世纪，首先在挪威、丹麦和瑞典等地方流行，公元7世纪左右随着一批北上的移民传至冰岛等处。" width="60%" :line="3" showMore />
```

</template>
</HCollapse>