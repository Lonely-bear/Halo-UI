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
import type { PropType } from 'vue';
import type { type, size, shape } from './button.types'

const props = defineProps({
    type: {
        type: String as PropType<type>,
        default: 'default' as type,
        required: false,
    },
    size: {
        type: String as PropType<size>,
        default: 'normal' as size,
        required: false
    },
    shape: {
        type: String as PropType<shape>,
        default: 'default' as shape,
        required: false
    },
    loading: {
        type: Boolean,
        default: false
    },
})

const { type, size, shape, loading } = props;
const buttonClass = `button button-type-${type} button-size-${size} button-shape-${shape}`;
</script>

<style scoped>
/* 内容包裹 */
.content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
}

.button {
    position: relative;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    border-radius: var(--border-radius);
    transition: all 0.3s;
    user-select: none;
    /* 主题颜色 */
    background-color: var(--bg-color);
    color: var(--text-color);

    /* 尺寸大小 */
    font-size: var(--font-size);
    padding: var(--padding);
}

.button:hover {
    /* 主题颜色 */
    background-color: var(--bg-hover-color);
}

/* 水波纹效果 */
.button::after {
    content: '';
    display: block;
    border-radius: var(--border-radius);
    position: absolute;
    top: -0.25em;
    left: -0.25em;
    right: -0.25em;
    bottom: -0.25em;
    pointer-events: none;
    background-color: var(--bg-hover-color);
    background-repeat: no-repeat;
    background-position: 50%;
    opacity: 0;
    transition: all 0.3s;
}

.button:active::after {
    opacity: 0.5;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0s;
}

/* 加载动画 */
@keyframes loadingAnimation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.button-type-default {
    --bg-color: #ffffff;
    --bg-hover-color: #ecf7ff;
    --text-color: #303133;
    border: 1px solid #dadada;
}

.button-type-primary {
    --bg-color: #2d87cc;
    --bg-hover-color: #50a2e1;
    --text-color: #ffffff;
}

.button-type-success {
    --bg-color: #23af54;
    --bg-hover-color: #1ccf5b;
    --text-color: #ffffff;
}

.button-type-danger {
    --bg-color: #db4343;
    --bg-hover-color: #fd6767;
    --text-color: #ffffff;
}

.button-size-normal {
    --font-size: 0.9rem;
    --padding: 0.5em 1.25em;
}

.button-size-large {
    --font-size: 1.2rem;
    --padding: 0.6em 1.5em;
}

.button-size-small {
    --font-size: 0.8rem;
    --padding: 0.4em 1em;
}

.button-size-mini {
    --font-size: 0.6rem;
    --padding: 0.3em 0.75em;
}

.button-shape-default {
    --border-radius: 0.25em;
}

.button-shape-round {
    --border-radius: 1.5em;
}

.button-shape-circle {
    --border-radius: 50%;
    --padding: 0.6em;
}

.loading {
    display: inline-block;
    width: 0.9em;
    height: 0.9em;
    box-sizing: border-box;
    border-radius: 50%;
    border: 2px dashed var(--text-color);
    animation: loadingAnimation 2s linear infinite;
}

/* 禁用效果 */
.button[disabled] {
    cursor: not-allowed;
}

.button[disabled]:hover {
    background-color: var(--bg-color);
}

.button[disabled]::before {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: var(--border-radius);
    position: absolute;
    top: 0;
    left: 0;
    content: '';
}

.button[disabled]:active::after {
    opacity: 0;
}
</style>