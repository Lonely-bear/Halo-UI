<script setup lang="ts">
import '@uiw/icons/fonts/w-icon.css';

const props = defineProps({
    name: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: 'inherit'
    },
    size: {
        type: String,
        default: '1em'
    },
    isLoading: {
        type: Boolean,
        default: false
    }
})
const { color, size, isLoading } = props;

</script>

<template>
    <i :class="`w-icon-${props.name} icon ${isLoading ? 'loading' : ''}`"></i>
</template>

<style scoped>
.icon {
    display: inline-block;
    width: min-content;
    height: min-content;
    font-size: v-bind(size);
    color: v-bind(color);
    vertical-align: middle;
}

.loading {
    transform: rotate(360deg);
    animation-name: loading;
    animation-timing-function: linear;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: reverse;
}

@keyframes loading {
    0% {
        transform: rotate(360deg);
    }

    100% {
        transform: rotate(0deg);
    }
}
</style>