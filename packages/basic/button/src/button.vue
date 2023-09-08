<!-- 使用参数type作为theme的属性名来读取对应配置 -->
<template>
    <button :class="buttonClass" :disabled="loading">
        <div class="content">
            <div class="loading" v-show="loading"></div>
            <slot name="prefix"></slot>
            <slot name="default">默认</slot>
            <slot name="suffix"></slot>
        </div>
    </button>
</template>

<script setup lang="ts">
import type { type, size, shape } from './button.types'

// 类型定义
type Props = {
    type?: type, // 类型
    size?: size, // 尺寸
    shape?: shape,   // 形状
    loading?: boolean    // 加载状态
}
const props = withDefaults(defineProps<Props>(), {
    type: 'default' as type,
    size: 'normal' as size,
    shape: 'default' as shape,
    loading: false
})

const { type, size, shape, loading } = props;
const buttonClass = `button button-type-${type} button-size-${size} button-shape-${shape}`;
</script>

<style scoped>
@import url(./button.css);
</style>