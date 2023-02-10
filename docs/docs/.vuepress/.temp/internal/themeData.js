export const themeData = JSON.parse("{\"logo\":\"/images/tkui.png\",\"navbar\":[{\"text\":\"🦁 快速上手\",\"link\":\"/guide/getting-started.md\"},{\"text\":\"🕊️ 组件\",\"link\":\"/components/index.md\"},{\"text\":\"🛸 GitHub\",\"link\":\"https://github.com/WangKang1555/Halo-UI\"}],\"sidebar\":{\"/guide/\":[{\"text\":\"快速上手\",\"link\":\"/guide/getting-started.md\",\"children\":[{\"text\":\"安装\",\"link\":\"/guide/getting-started.md\"},{\"text\":\"项目简介\",\"link\":\"/guide/index.md\"}]},{\"text\":\"更新日志\",\"link\":\"/changelog/\"}],\"/changelog/\":[{\"text\":\"快速上手\",\"link\":\"/guide/getting-started.md\",\"children\":[{\"text\":\"安装\",\"link\":\"/guide/getting-started.md\"},{\"text\":\"项目简介\",\"link\":\"/guide/index.md\"}]},{\"text\":\"更新日志\",\"link\":\"/changelog/\"}],\"/components/\":[{\"text\":\"Basic 基础组件\",\"link\":\"/components/basic/\",\"children\":[{\"text\":\"button 按钮\",\"link\":\"/components/basic/button/\"},{\"text\":\"icon 图标\",\"link\":\"/components/basic/icon/\"},{\"text\":\"link 链接\",\"link\":\"/components/basic/link/\"}]},{\"text\":\"Form 表单组件\",\"link\":\"/components/form/\",\"children\":[{\"text\":\"date-selector 日期选择器\",\"link\":\"/components/form/date-selector/\"}]},{\"text\":\"Data 数据展示\",\"link\":\"/components/data/\",\"children\":[{\"text\":\"card 卡片\",\"link\":\"/components/data/card\"},{\"text\":\"badge 徽章\",\"link\":\"/components/data/badge\"}]},{\"text\":\"Navigation 导航组件\",\"link\":\"/components/navigation/\"},{\"text\":\"Feedback 反馈组件\",\"link\":\"/components/feedback/\",\"children\":[{\"text\":\"dialog 对话框\",\"link\":\"/components/feedback/dialog/\"},{\"text\":\"message 消息提示\",\"link\":\"/components/feedback/message/\"}]},{\"text\":\"Others 其他\",\"link\":\"/components/others/\"}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
