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

# input 输入框

<hr>
<h3 class="h-3">Props</h3>

| NAME        | TYPE        | VALUE            | DEFAULT | TIPS       |
| ----------- | ----------- | ---------------- | ------- | ---------- |
| model_value | -           | -                | ''      | 绑定变量   |
| type        | Object-tyep | 同原生input type | 'text'  | 输入框类型 |
| style       | String      | String           | ''      | 输入框样式 |
| placeholder | String      | String           | ''      | 缺省值     |

<hr>
<h3 class="h-3">演示及示例代码</h3>

<HCollapse title="普通使用" collapse-title="示例代码" style="width: 100%;">
<HInput v-model="value" placeholder="请输入用户名" />
<br>
<br>
<HInput v-model="value" type="password" placeholder="请输入密码" />
<template #collapseContent>

```html
<HInput v-model="value" placeholder="请输入用户名" />
<br>
<br>
<HInput v-model="value" type="password" placeholder="请输入密码" />
```

</template>
</HCollapse>


<hr>
<h3 class="h-3">Input Type</h3><br>
"button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "name" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week"