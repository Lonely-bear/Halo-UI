export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/images/tkui.png\",\"heroHeight\":120,\"actions\":[{\"text\":\"快速上手\",\"link\":\"/guide/getting-started.md\",\"type\":\"primary\"},{\"text\":\"项目简介\",\"link\":\"/guide/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"简单易用\",\"details\":\"需配置内容项少，安装即可使用。\"},{\"title\":\"智能提示\",\"details\":\"组件采用ts编写，使用vscode编辑器时有良好的智能提示支持。\"},{\"title\":\"体积小\",\"details\":\"该组件基于vue3设计，未引入任何其他UI框架，因此体积小，轻便。\"}]},\"headers\":[],\"git\":{\"updatedTime\":1676058202000,\"contributors\":[{\"name\":\"WangKang1555\",\"email\":\"488376359@qq.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
