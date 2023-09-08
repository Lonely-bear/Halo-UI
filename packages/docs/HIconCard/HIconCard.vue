<script setup lang="ts">
import { HIcon, Message } from '../..';
import type { name } from '../../basic/icon/src/icon.types'
type Props = {
  name?: name | ''
  color?: string
  size?: string
  isLoading?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  name: '',
  color: 'inherit',
  size: '1em',
  isLoading: false
})


function copyToClip(content) {
  var aux = document.createElement("input");
  aux.setAttribute("value", `<HIcon name="${content}" />`);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  Message({
    message: '复制成功 ' + `<HIcon name="${content}" />`,
    type: 'success'
  })
}
</script>

<template>
  <div class="icon-card" @click="copyToClip(props.name)">
    <HIcon :name="props.name" :size="props.size" :color="props.color" />
    <div class="icon-name">{{ props.name }}</div>
  </div>
</template>

<style scoped>
.icon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  width: 100px;
  height: 100px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  cursor: pointer;
  padding: 10px;
  box-sizing: border-box;
}

.icon-card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.icon-name {
  text-align: center;
}
</style>