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

const props = defineProps({
    modelValue: Boolean,        // 是否显示
    title: String               // 标题
})

const emits = defineEmits([
    'confirm',                  // ‘确定’ 回调事件
    'cancel',                   // ‘取消’ 回调事件
    'update:modelValue'         // 绑定值的更新事件
])

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
.model-box {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0);
    transition: all 1s;
    z-index: 9999;
}

.model-content {
    height: fit-content;
    max-height: 90%;
    max-width: 90%;
    padding: 1rem 2rem;
    font-size: 0.9em;
    opacity: 0;
    color: #606266;
    line-height: 1.3em;
    background-color: white;
    border-radius: 0.4em;
    position: fixed;
    box-sizing: border-box;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    transition: all 0.3s;
}

.title {
    font-size: 1.2em;
    padding-bottom: 1rem;
    box-sizing: border-box;
    border-bottom: 1px solid #eeeeee;
}

.dialog-content {
    width: 100%;
    max-height: calc(90vh - 12em);
    overflow: auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.toolbar {
    width: 100%;
    box-sizing: border-box;
    padding-top: 1em;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2em;
    border-top: 1px solid #eeeeee;
}
</style>