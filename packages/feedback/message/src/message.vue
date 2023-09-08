<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import type { MessageTypes } from './message.types'
import { HIcon } from '../../../../packages'
import type { name as IconName } from '../../../basic/icon/src/icon.types'

type Props = {
    message?: string,
    duration?: number,
    type?: MessageTypes,
    dark?: boolean,
    offset?: number,
    isClose?: boolean,
    onClose?: Function
}
const props = withDefaults(defineProps<Props>(), {
    message: '',
    duration: 2000,
    type: 'primary' as MessageTypes,
    dark: false,
    offset: 20,
    isClose: false,
    onClose: () => { }
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


let iconName = ref<IconName>("information-o");
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

function onBeforeLeave(el: Element) {
    if (props.onClose) {
        props.onClose(el)
    }
}

</script>

<template>
    <Transition @before-leave="(el) => onBeforeLeave(el)" @after-leave="$emit('destroy')">
        <div :class="`message ${props.dark ? 'message-dark' : ''} message-${props.type}`" v-show="showMessage">
            <HIcon :name="iconName" size="1.25em"></HIcon>
            <span style="margin-left: 0.5em;">{{ message }}</span>
            <HIcon name="close" class="close" size="12px" v-if="props.isClose" @click="showMessage = false"></HIcon>
        </div>
    </Transition>
</template>

<style scoped>
@import url('./message.css');

.message {
    top: v-bind(top);
}
</style>