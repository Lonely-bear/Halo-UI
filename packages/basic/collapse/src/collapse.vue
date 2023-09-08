<template>
    <div class="collapse-main">
        <HCard style="margin-bottom: 0;width: 100%;" :title="title" :foot="foot">
            <slot></slot>
        </HCard>
        <div class="collapse-button" @click="handleClick">
            <span>{{ iconName }}</span>
        </div>
        <HCard style="margin-top: 0;width: 100%;background-color: #fbfbfb;" :title="collapseTitle" :foot="collapseFoot" v-if="isCollapse" :hover-shadow="false">
            <slot name="collapseContent">empty</slot>
        </HCard>
    </div>
</template>

<script setup lang="ts">
import HCard from '../../../data/card';
import { ref } from 'vue';

type Props = {
    title?: string
    foot?: string
    collapseTitle?: string
    collapseFoot?: string
}
defineProps<Props>()
let isCollapse = ref<Boolean>(false);
let iconName = ref<String>("展开");
function handleClick() {
    if (iconName.value === "展开") {
        iconName.value = "收起"
    } else {
        iconName.value = "展开"
    }
    isCollapse.value = !isCollapse.value;
}
</script>

<style scoped>
@import url('./collapse.css');
</style>