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
const props = defineProps({
    title: String,          // 标题
    foot: String            // 底部
})
</script>

<style scoped>
.card-box {
    height: fit-content;
    width: fit-content;
    padding: 1rem 2rem;
    margin: 0.5rem;
    color: #606266;
    line-height: 1.3em;
    background-color: white;
    border-radius: 0.4em;
    box-sizing: border-box;
    transition: all 0.3s;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, .24);
}

.card-box:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, .12);
}

.title {
    font-size: 1.2em;
    padding-bottom: 1rem;
    box-sizing: border-box;
    border-bottom: 1px solid #eeeeee;
}

.card-content {
    width: 100%;
    overflow: auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.footbar {
    font-size: 0.8em;
    color: #727478;
    width: 100%;
    box-sizing: border-box;
    padding-top: 1em;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1em;
    border-top: 1px solid #eeeeee;
}

</style>