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

type Props = {
    value?: string | number,
    color?: string,
    textColor?: string,
    max?: number
}
const props = withDefaults(defineProps<Props>(), {
    value: '',
    color: '#f56c6c',
    textColor: '#ffffff',
    max: 99
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
@import url('./badge.css');
.badge {
  background-color: v-bind(color);
  border: 1px solid v-bind(textColor);
}

.badge-dot {
  background-color: v-bind(color);
  border: 1px solid v-bind(textColor);
}
</style>