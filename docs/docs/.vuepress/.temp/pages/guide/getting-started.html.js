export const data = JSON.parse("{\"key\":\"v-fb0f0066\",\"path\":\"/guide/getting-started.html\",\"title\":\"快速上手\",\"lang\":\"zh-CN\",\"frontmatter\":{\"next\":{\"text\":\"项目简介\",\"link\":\"/guide/index.md\"}},\"headers\":[{\"level\":3,\"title\":\"依赖环境\",\"slug\":\"依赖环境\",\"link\":\"#依赖环境\",\"children\":[]},{\"level\":3,\"title\":\"安装\",\"slug\":\"安装\",\"link\":\"#安装\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"guide/getting-started.md\"}")

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
