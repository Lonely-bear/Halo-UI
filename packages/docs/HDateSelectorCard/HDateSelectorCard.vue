<script setup lang="ts">
import { ref } from 'vue'
import { HDateSelector } from '../..'

const value = ref('')
// 获取当前日期，并转化为 YYYY-MM-DD 格式
value.value = new Date().toLocaleDateString().replace(/\//g, '-')
</script>

<template>
  <HDateSelector v-model="value" always-show />
</template>