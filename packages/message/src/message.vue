<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import type { PropType } from 'vue'
import type { MessageTypes } from './message.types'
import { HIcon } from '../../../packages';

const props = defineProps({
    message: { type: String, default: '' },
    duration: { type: Number, default: 2000 },
    type: { type: String as PropType<MessageTypes>, default: 'primary' as MessageTypes },
    dark: { type: Boolean, default: false },
    offset: { type: Number, default: 20 },
    isClose: { type: Boolean, default: false },
    onClose: { type: Function }
})

let top = props.offset + 'px';
let showMessage = ref(false);
let timer: any = null;

onMounted(() => {
    showMessage.value = true;
    if (props.duration === -1) {
        timer = null;
    } else {
        timer = setTimeout(() => {
            showMessage.value = false;
        }, props.duration);
    }
})

onUnmounted(() => {
    clearTimeout(timer)
})


let iconName = ref("information-o");
switch (props.type) {
    case 'primary':
        iconName.value = "information-o";
        break;
    case 'success':
        iconName.value = "circle-check-o";
        break;
    case 'danger':
        iconName.value = "circle-close-o";
        break;
    case 'warn':
        iconName.value = "question-circle-o";
        break;
    default:
        break;
}

</script>

<template>
    <Transition @before-leave="onClose" @after-leave="$emit('destroy')">
        <div :class="`message ${props.dark ? 'message-dark' : ''} message-${props.type}`" v-show="showMessage">
            <HIcon :name="iconName" size="1.25em"></HIcon>
            <span style="margin-left: 0.5em;">{{ message }}</span>
            <HIcon name="close" class="close" v-if="props.isClose" @click="showMessage = false"></HIcon>
        </div>
    </Transition>
</template>

<style scoped>
.message {
    position: fixed;
    top: v-bind(top);
    left: 50%;
    font-size: 14px;
    font-weight: bold;
    transform: translate(-50%, 0);
    --message-bg-color: #ffffff;
    background-color: var(--message-bg-color);
    color: var(--message-text-color);
    padding: 0.8em 2em;
    border-radius: 5px;
    box-shadow: 0 0 4px var(--message-box-shadow-color);
    user-select: none;
    z-index: 999;
    transition: all 0.2s linear;

    display: flex;
    justify-content: center;
    align-items: center;
}

.message::before {
    display: block;
    content: " ";
    position: absolute;
    top: -1px;
    left: -1px;
    width: 1em;
    height: 1em;
    border-top: 3px solid var(--message-text-color);
    border-left: 3px solid var(--message-text-color);
    border-radius: 5px 0 0 0;
}

.message::after {
    display: block;
    content: " ";
    position: absolute;
    bottom: -1px;
    right: -1px;
    width: 1em;
    height: 1em;
    border-bottom: 3px solid var(--message-text-color);
    border-right: 3px solid var(--message-text-color);
    border-radius: 0 0 5px 0;
}

.message-dark {
    --message-bg-color: #303133;
}


/* 消息类型样式 */
.message-success {
    --message-text-color: rgb(35, 175, 84);
    --message-box-shadow-color: rgba(35, 175, 84, 0.2);
}

.message-primary {
    --message-text-color: rgb(45, 135, 204);
    --message-box-shadow-color: rgba(45, 135, 204, 0.2);
}

.message-danger {
    --message-text-color: rgb(219, 67, 67);
    --message-box-shadow-color: rgba(219, 67, 67, 0.2);
}

.message-warn {
    --message-text-color: rgb(235, 149, 29);
    --message-box-shadow-color: rgba(235, 149, 29, 0.2);
}

.close {
    position: absolute;
    top: 0.25em;
    right: 0.25em;
    cursor: pointer;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translate(-50%, -100%);
}
</style>