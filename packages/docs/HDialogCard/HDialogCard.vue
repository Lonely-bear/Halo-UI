<script setup lang="ts">
import { ref } from 'vue'
import { HDialog, HButton, Message, HLink } from '../..'
const show = ref(false)
function open() {
  show.value = true
}
function onConfirm() {
  Message({
    message: '点击了确定',
    type: 'success'
  })
}
function onCancel() {
  Message({
    message: '点击了取消',
    type: 'danger'
  })
}
</script>

<template>
  <HButton @click="open">
    打开遮罩层
  </HButton>
  <HDialog v-model="show" title="标题" @confirm="onConfirm" @cancel="onCancel">
    <slot>
      北欧神话，又称挪威神话（英语：Norse
      Mythology），是斯堪的纳维亚地区所特有的一个神话体系，其形成时间晚于世界上其他几大神话体系，其口头传播历史可追溯到公元1-2世纪，首先在挪威、丹麦和瑞典等地方流行，公元7世纪左右随着一批北上的移民传至冰岛等处。
      <br><HLink type="primary" href="https://www.baidu.com/">www.baidu.com</HLink>
    </slot>
  </HDialog>
</template>