<script setup lang="ts">
import { ref } from 'vue';
import { Message, HInput, HEllipsis, HIcon, HButton, HLink, HBadge, HCard, HDialog, HDateSelector, HCollapse } from '../packages'

const handleClick = () => {
    Message({
        'message': 'Congrats, this is a success message.',
        'duration': 5000,
        // "isClose": true,
        'type': 'danger',
        // 'dark': true,
        'onClose': (el: Element) => {
            console.log(el)
        },
    })
}
let showDialog = ref(false);
let showDialog2 = ref(false);
let date = ref("")
let inputValue = ref("")
</script>

<template>
    <HInput :model_value="inputValue" placeholder="请输入用户名" />

    <HCollapse title="效果图" collapse-title="Code">
        <HBadge value="1220">
            <HButton @click="showDialog = true">hello</HButton>
        </HBadge>
        <HIcon name="alipay"></HIcon>
        <HButton @click="handleClick">hello</HButton>
        <HLink href="https://www.baidu.com">www.baidu.com</HLink>
    </HCollapse>

    <HCard foot="联系方式：15552300948" :hover-shadow="true">
        <template #title>
            <span>Android</span>
            <HIcon name="adobe" style="margin-left: 0.25em;"></HIcon>
        </template>
        <HBadge value="1220">
            <HButton @click="showDialog = true">hello</HButton>
        </HBadge>
        <HIcon name="alipay"></HIcon>
        <HButton @click="handleClick">hello</HButton>
        <HLink href="https://www.baidu.com">www.baidu.com</HLink>
    </HCard>
    <HDialog v-model="showDialog" title="Tips">
        <HCard foot="联系方式：15552300948">
            <template #title>
                <span>Android</span>
                <HIcon name="adobe" style="margin-left: 0.25em;"></HIcon>
            </template>
            <HBadge value="1220">
                <HButton @click="showDialog2 = true">hello</HButton>
            </HBadge>
            <HIcon name="alipay"></HIcon>
            <HButton @click="handleClick">hello</HButton>
            <HLink href="https://www.baidu.com">www.baidu.com</HLink>
        </HCard>
    </HDialog>
    <HDateSelector v-model="date"></HDateSelector>
    <HDateSelector v-model="date"></HDateSelector>
    <HEllipsis content="当然可以！我可以帮你设计一个开放世界的像素游戏地图。请告诉我你对这个地图的一些要求和想法，比如地形、建筑物、道路等。另外，你还有什么特定的主题或故事情节吗？让我知道你的想法，我会尽力满足你的需求。"
        width="300px" :line="2" show-more />
</template>