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