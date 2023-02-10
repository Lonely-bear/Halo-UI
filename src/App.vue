<script setup lang="ts">
import { ref } from 'vue';
import { Message, HIcon, HButton, HLink, HBadge, HCard, HDialog, HDateSelector } from '../packages'

const handleClick = () => {
    Message({
        'message': 'Congrats, this is a success message.Congrats, this is a success message.',
        'duration': 5000,
        "isClose": true,
        'type': 'primary',
        'onClose': () => { },
    })
}
let showDialog = ref(false);
let showDialog2 = ref(false);
let date = ref("")
</script>

<template>
    <HCard foot="联系方式：15552300948">
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
    <HDateSelector v-model="date" shake></HDateSelector>

</template>