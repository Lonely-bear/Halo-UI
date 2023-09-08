<template>
  <input class="input_value" :placeholder="placeholder" :style="style" ref="inputRef" :type="type" v-model="model_value" />
</template>

<script setup lang="ts">
import type { type } from './input.types';
import { ref, watch } from 'vue';

type Props = {
  model_value: string
  type?: type
  style?: string
  placeholder?: string
}
const props = withDefaults(defineProps<Props>(), {
  type: 'text'
})
defineEmits(['update:model_value'])
const { model_value, type, style, placeholder } = props

const inputRef = ref<HTMLInputElement | null>(null)
watch(() => model_value, () => {
  console.log(model_value)
})
</script>

<style scoped>
@import url('./input.css');
</style>