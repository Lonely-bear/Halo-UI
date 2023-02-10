<template>
    <a :href="props.href" :class="linkClass" ref="linkRef" @click.prevent="openLink" :disabled="props.disabled">
        <span class="link-text">
            <slot>Link</slot>
        </span>
    </a>
</template>

<script lang="ts" setup>
import { ref, type PropType } from 'vue'
import type { Type } from './link.types'

const props = defineProps({
    type: {
        type: String as PropType<Type>,
        default: 'default' as Type,
        required: false
    },
    underline: {
        type: Boolean,
        default: true,
        required: false
    },
    disabled: {
        type: Boolean,
        default: false,
        required: false
    },
    href: {
        type: String,
        default: "",
        required: false
    }
})

//===主题整合================================
const linkRef = ref<HTMLLinkElement | null>(null);

function openLink(): void {
    if (linkRef.value && props.href && !props.disabled) {
        window.open(linkRef.value.href)
    }
}

const linkClass = `link link-type-${props.type} ${props.underline ? '' : 'link-no-underline'}`;
</script>

<style scoped>
.link {
    display: inline-block;
    color: var(--text-color);
    text-decoration-line: none;
    outline: none;
    position: relative;
    user-select: none;
    caret-color: transparent;
    padding: 0 0.25em;
}

.link::after {
    display: block;
    opacity: 0;
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    background-color: var(--text-underline-color);
    transition: all 0.2s;
}

.link:hover {
    color: var(--text-hover-color);
}

.link:hover::after {
    opacity: 1;
    bottom: -0.2em;
}

.link-text {
    display: inline-flex;
    justify-content: center;
    align-content: center;
    user-select: none;
}

.link-type-default {
    --text-color: #606266;
    --text-hover-color: #2d87cc;
    --text-underline-color: #2d87cc;
}

.link-type-primary {
    --text-color: #50a2e1;
    --text-hover-color: #2d87cc;
    --text-underline-color: #2d87cc;
}

.link-type-success {
    --text-color: #1ccf5b;
    --text-hover-color: #23af54;
    --text-underline-color: #23af54;
}

.link-type-danger {
    --text-color: #fd6767;
    --text-hover-color: #db4343;
    --text-underline-color: #db4343;
}

.link-no-underline {
    --text-underline-color: transparent;
}

.link[disabled=true] {
    cursor: not-allowed;
    opacity: 0.5;
}

.link[disabled=true]:hover {
    color: var(--text-color);
}

.link[disabled=true]:hover::after {
    opacity: 0;
}
</style>