<template>
    <a :href="props.href" :class="linkClass" ref="linkRef" @click.prevent="openLink" :disabled="props.disabled">
        <span class="link-text">
            <slot>Link</slot>
        </span>
    </a>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { Type } from './link.types'

type Props = {
    type?: Type
    underline?: boolean
    disabled?: boolean
    href: string
}
const props = withDefaults(defineProps<Props>(), {
    type: 'default' as Type,
    underline: true,
    disabled: false,
    href: ""
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
@import url('./link.css');
</style>