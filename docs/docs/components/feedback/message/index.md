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

# message 消息提示函数

<hr>
<h3 class="h-3">Props</h3>

| name | type | value | decoration |
| --- | --- | --- | --- |
| message | String | - | 消息内容 |
| duration | Number | 2000 | 消息显示时长 |
| type | 'primary'/'success'/'danger'/'warn' | 'primary' | 消息类型 |
| dark | Boolean | false | 暗黑模式 |
| offset | Number | 20 | 距离顶部位置 |
| isClose | Boolean | false | 是否显示关闭按钮 |
| onClose | Function | - | 关闭时触发事件 |

<hr>
<h3 class="h-3">演示及示例代码</h3>

<HCollapse title="普通使用" collapse-title="示例代码" style="width: 100%;">
<HMessageCard />
<template #collapseContent>

```vue
<script setup lang="ts">
import { HButton, Message } from '../..'

function onClickPrimary() {
  Message({
    type: 'primary',
    message: '这是一条Primary提示消息',
  })
}

function onClickSuccess() {
  Message({
    type: 'success',
    message: '这是一条Success提示消息',
  })
}

function onClickWarning() {
  Message({
    type: 'warn',
    message: '这是一条Warn提示消息',
  })
}

function onClickDanger() {
  Message({
    type: 'danger',
    message: '这是一条Danger提示消息',
  })
}

function onClickDark() {
  Message({
    dark: true,
    type: 'success',
    message: '这是一条Dark提示消息',
  })
}
</script>

<template>
  <HButton type="primary" @click="onClickPrimary">Primary</HButton>
  <HButton type="primary" @click="onClickSuccess">Success</HButton>
  <HButton type="primary" @click="onClickWarning">Warn</HButton>
  <HButton type="primary" @click="onClickDanger">Danger</HButton>
  <HButton type="primary" @click="onClickDark">Dark</HButton>
</template>
```

</template>
</HCollapse>