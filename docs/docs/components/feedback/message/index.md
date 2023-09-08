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

```js
Message({
  message: '成功刷新！',
  type: 'primary',
  duration: 5000,
  dark: false,
  offset: 20,
  isClose: true,
  onClose: (el) => { }
})
```