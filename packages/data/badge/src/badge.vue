<template>
    <div class="badge-box" ref="badgeContainer">
        <div class="badge-main">
            <slot></slot>
        </div>
        <div class="badge" ref="badge" v-if="value">{{ value }}</div>
        <div class="badge-dot" ref="badge" v-else></div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch, nextTick } from 'vue';

const props = defineProps({
    value: {
        type: [String, Number],
    },
    color: {
        type: String,
        default: '#f56c6c'
    },
    textColor: {
        type: String,
        default: '#ffffff'
    },
    max: {
        type: Number,
        default: 99
    }
})

const badge = ref<HTMLDivElement | null>(null);
const badgeContainer = ref<HTMLDivElement | null>(null);
function badgeInnerText(): void {
    nextTick(() => {
        if (badge.value && props.value) {
            let result = Number(badge.value.innerText);
            if (!isNaN(result)) {
                let innerText = result > props.max ? `${props.max}+` : `${result}`;
                badge.value.innerText = innerText;
                if (badgeContainer.value) {
                    badgeContainer.value.style.marginRight = badge.value.offsetWidth + 'px';
                }
            } else {
                if (badgeContainer.value) {
                    badgeContainer.value.style.marginRight = badge.value.offsetWidth + 'px';
                }
            }
        } else {
            if (badgeContainer.value) {
                badgeContainer.value.style.marginRight = badge.value?.offsetWidth + 'px';
            }
        }
    })
}

onMounted(() => {
    badgeInnerText();
})

watch(props, () => {
    badgeInnerText();
})

</script>

<style scoped>
.badge-box {
    display: inline-block;
    height: min-content;
    width: min-content;
    position: relative;
}

.badge-main {
    display: inline-block;
    z-index: 1;
}

.badge {
    font-size: 12px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(calc(100% - 0.4em), -50%);
    padding: 0.1em 0.4em;
    border-radius: 0.8em;
    color: #fff;
    user-select: none;
    box-sizing: border-box;
    background-color: v-bind(color);
    border: 1px solid v-bind(textColor);
    z-index: 2;
}

.badge-dot {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.3em;
    border-radius: 50%;
    transform: translate(50%, -50%);
    background-color: v-bind(color);
    border: 1px solid v-bind(textColor);
    z-index: 2;
}
</style>