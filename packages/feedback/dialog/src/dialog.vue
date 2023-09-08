<template>
    <div class="model-box" ref="modelBoxRef" :model-value="modelValue" v-show="props.modelValue">
        <div class="model-content" ref="modelContentRef">
            <div class="title" v-if="props.title">
                {{ props.title }}
            </div>
            <div class="title" v-else>
                <slot name="title"></slot>
            </div>
            <div class="dialog-content">
                <slot></slot>
            </div>
            <div class="toolbar">
                <HButton type="default" @click="cancel">Cancel</HButton>
                <HButton type="primary" @click="confirm">Confirm</HButton>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue';
import { HButton } from '../../../index'

type Props = {
    modelValue: boolean,
    title?: string
}
const props = withDefaults(defineProps<Props>(), {
    title: ''
})

type Emits = {
    (event: 'confirm'): void, // ‘确定’ 回调事件
    (event: 'cancel'): void, // ‘取消’ 回调事件
    (event: 'update:modelValue', value: boolean): void // 绑定值的更新事件
}
const emits = defineEmits<Emits>()

let modelBoxRef = ref<HTMLDivElement | null>(null);
let modelContentRef = ref<HTMLDivElement | null>(null);
let modelBoxStyle: CSSStyleDeclaration | undefined;
let modelContentStyle: CSSStyleDeclaration | undefined;
onMounted(() => {
    modelBoxStyle = modelBoxRef.value?.style;
    modelContentStyle = modelContentRef.value?.style;
})
watch(props, (newVal) => {
    if (newVal.modelValue) {
        setTimeout(() => {
            openModel()
        }, 0);
    }
})
function closeModel() {
    setTimeout(() => {
        if (modelBoxStyle && modelContentStyle) {
            modelBoxStyle.backgroundColor = "rgba(0, 0, 0, 0)";
            modelContentStyle.opacity = "0";
            modelContentStyle.transform = "translate(-50%, -70%)";
            setTimeout(() => {
                emits('update:modelValue', false);
            }, 600);
        }
    }, 100);
}

function openModel() {
    if (modelBoxStyle && modelContentStyle) {
        modelBoxStyle.backgroundColor = "rgba(0, 0, 0, 0.15)";
        modelContentStyle.opacity = "1";
        modelContentStyle.transform = "translate(-50%, -50%)";
    }
}

/**
 * 操作按钮
 */
function confirm(): void {
    emits("confirm");
    closeModel()
}

function cancel(): void {
    emits("cancel")
    closeModel()
}
</script>

<style scoped>
@import url('./dialog.css');
</style>