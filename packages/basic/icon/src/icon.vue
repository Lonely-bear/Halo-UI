<script setup lang="ts">
import '@uiw/icons/fonts/w-icon.css';
import type { name } from './icon.types'
type Props = {
    name?: name | ''
    color?: string
    size?: string
    isLoading?: boolean
}
const props = withDefaults(defineProps<Props>(), {
    name: '',
    color: 'inherit',
    size: '1em',
    isLoading: false
})
const { color, size, isLoading } = props;

</script>

<template>
    <i :class="`w-icon-${props.name} icon ${isLoading ? 'loading' : ''}`"></i>
</template>

<style scoped>
@import url('./icon.css');
.icon {
  font-size: v-bind(size);
  color: v-bind(color);
}
</style>