export const data = JSON.parse("{\"key\":\"v-fffb8e28\",\"path\":\"/guide/\",\"title\":\"项目简介\",\"lang\":\"zh-CN\",\"frontmatter\":{\"prev\":{\"text\":\"安装\",\"link\":\"/guide/getting-started.md\"},\"next\":{\"text\":\"更新日志\",\"link\":\"/changelog/\"}},\"headers\":[],\"git\":{\"updatedTime\":1694156262000,\"contributors\":[{\"name\":\"WangKang1555\",\"email\":\"488376359@qq.com\",\"commits\":1},{\"name\":\"wangk\",\"email\":\"wangk@col.com\",\"commits\":1}]},\"filePathRelative\":\"guide/index.md\"}")

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
