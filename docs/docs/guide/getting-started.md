---
next:
    text: 项目简介
    link: /guide/index.md
---

# 快速上手
### 依赖环境
 * [Vue3](https://cn.vuejs.org/)
 * Node.js
 * Vite
 * @uiw/icons

### 安装
通过该教程引导您安装该组件UI库:

 *  **步骤 1:** 新建目录或进入已有目录
```sh
mkdir project
cd project
```
 *  **步骤 1:** 初始化vue项目
```sh
git init
npm init vue@latest
npm install
```
 *  **步骤 3:** 下载Github链接中的 packages 文件夹
 *  **步骤 4:** 将 packages 文件夹放入项目根目录中
 *  **步骤 5:** 在项目src目录下main.ts中添加以下内容
```js
import { createApp } from 'vue'
import App from './App.vue'
import HaloUI from '../packages'

const app = createApp(App);
app.use(HaloUI)

app.mount('#app')
```
 *  **步骤 6:** 启动项目
```sh
npm run dev
```
 *  **步骤 7:** 根据组件文档，使用对应组件或Hook函数即可
 *  **步骤 8:** 如果需要使用Icon图标，则需要额外安装
```sh
npm install @uiw/icons
```
