# 😁快速上手
### 组件文档地址
 * [Docs👻👻](http://halodocs_wk.shznykx.cn/)
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




# 😁更新日志

## [0.0.5] - 2023-09-08
#### 版本描述: 增加项目文档
#### 更新内容:
**新增:**
 - 对docs进行全面跟进
 - 现已对完成的组件都进行了文档编写

## [0.0.4] - 2023-08-04
#### 版本描述: 增加部分组件
#### 更新内容:
**新增:**
 - 新增Basic组件中的ellipsis组件
 - 新增Form组件中的input组件

**更新:**
 - 优化了原来的代码结构
 - 将type.d.ts抽离成单个组件

#### [工作原因] - 暂停开发......

## [0.0.3] - 2023-02-12
#### 版本描述: 修改了部分组件
#### 更新内容:
**更新:**
 - 更新card组件，为其添加card-shadow参数，控制是否显示hover阴影
 - 更新date-selector组件，修改其input框的样式

## [0.0.2] - 2023-02-11
#### 版本描述: 新增若干个组件
#### 更新内容:
**新增:**
 - 新增Basic组件中的button组件
 - 新增Basic组件中的link组件
 - 新增Data组件中的badge组件
 - 新增Data组件中的card组件
 - 新增Feedback组件中的dialog组件
 - 新增Form组件中的date-selector组件

**更新:**

 - 更新icon组件的类型，为icon组件名智能提示写类型声明文件
 - 更新message组件的样式，修改其最大宽度为屏幕的65%，宽度为根据内容自适应。

## [0.0.1] - 2023-02-10
#### 版本描述: 首次提交
#### 更新内容:
**新增:**
 - 新增Basic组件中的icon组件
 - 新增Feedback组件中的message组件