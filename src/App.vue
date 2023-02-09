<script setup lang="ts">
import { Message, HIcon } from '../packages'

const handleClick = () => {
    Message({
        'message': 'Congrats, this is a success message.',
        'duration': -1,
        'type': 'primary',
        'onClose': () => {},
        'isClose': true
    })
}
</script>

<template>
    <button @click="handleClick">Message</button>
    <span>aaaa</span>
    <HIcon name="loading" is-loading color="rgb(45, 135, 204)"></HIcon>
</template>