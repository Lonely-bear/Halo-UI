<template>
    <div :class="divClass" :title="showMore ? content : ''">
        {{ content }}
    </div>
</template>

<script setup lang="ts">
// 类型定义
type Props = {
    content: string // 内容
    line?: number   // 行数
    width?: string  // 宽度
    showMore?: boolean // 是否显示更多
}
const props = withDefaults(defineProps<Props>(), {
    content: '',
    line: 1,
    width: '100%',
    showMore: false
})

const { line, width } = props;
const divClass = `ellipsis ${line ? 'ellipsis-line' : ''} ${width ? 'ellipsis-width' : ''}`
</script>

<style scoped>
@import url(./ellipsis.css);

.ellipsis-width {
    width: v-bind(width);
}

.ellipsis-line {
    -webkit-line-clamp: v-bind(line);
}
</style>