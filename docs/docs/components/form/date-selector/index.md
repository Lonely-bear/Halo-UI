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
# date-selector 日期选择器

<hr>
<h3 class="h-3">Props</h3>

| NAME        | TYPE    | VALUE      | DEFAULT | TIPS                   |
| ----------- | ------- | ---------- | ------- | ---------------------- |
| model_value | -       | -          | ''      | 绑定变量               |
| shake       | Boolean | true/false | false   | 是否开启震动反馈       |
| alwaysShow  | Boolean | true/false | false   | 是否一直展示时间选择器 |

<hr>
<h3 class="h-3">演示及示例代码</h3>

<HCollapse title="普通使用（需v-model绑定动态数据才能修改数据）" collapse-title="示例代码" style="width: 100%;">
<HDateSelectorCard />
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

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { HDateSelector } from '../..'

const value = ref('')
</script>

<template>
  <HDateSelector v-model="value" />
</template>
```

</template>
</HCollapse>