---
next:
    text: 项目简介
    link: /guide/index.md
---

# 快速上手
### 依赖环境
 * [vue (v3)](https://cn.vuejs.org/)

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
 *  **步骤 3:** 安装tk-personal-components
```sh
npm install tk-personal-components
```
 *  **步骤 4:** 在项目src目录下main.js中添加以下内容
```js
import { createApp } from 'vue'
import App from './App.vue'
import TKUI from 'tk-personal-components'
// 引入css资源
import 'tk-personal-components/dist/style.css'

createApp(App).use(TKUI).mount('#app')
```
 *  **步骤 5:** 启动项目
```sh
npm run dev
```