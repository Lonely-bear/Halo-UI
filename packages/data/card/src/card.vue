<template>
    <div class="card-box">
        <div class="title" v-if="props.title">
            {{ props.title }}
        </div>
        <div class="title" v-else>
            <slot name="title"></slot>
        </div>
        <div class="card-content">
            <slot></slot>
        </div>
        <div class="footbar" v-if="props.foot">
            {{ props.foot }}
        </div>
        <div class="footbar" v-else>
            <slot name="foot"></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

type Props = {
    title?: string,
    foot?: string,
    hoverShadow?: boolean
}
const props = withDefaults(defineProps<Props>(), {
    title: '',
    foot: '',
    hoverShadow: true
})

let cardShadow = computed(() => {
    return props.hoverShadow ? '0px 0px 12px rgba(0, 0, 0, .12)' : '0px 0px 2px rgba(0, 0, 0, .24)';
})
</script>

<style scoped>
@import url('./card.css');
.card-box:hover {
  box-shadow: v-bind(cardShadow);
}
</style>