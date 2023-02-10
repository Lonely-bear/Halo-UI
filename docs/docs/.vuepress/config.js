import { defaultTheme, defineUserConfig } from 'vuepress';
const sidebarProject = [
  {
    text: '快速上手',
    link: '/guide/getting-started.md',
    children: [
      {
        text: '安装',
        link: '/guide/getting-started.md',
      },
      {
        text: '项目简介',
        link: '/guide/index.md',
      },
    ],
  },
  {
    text: '更新日志',
    link: '/changelog/',
  },
];

const siderbarComponents = [
  {
    text: 'Basic 基础组件',
    link: '/components/basic/',
    children: [
      {
        text: 'button 按钮',
        link: '/components/basic/button/',
      },
      {
        text: 'icon 图标',
        link: '/components/basic/icon/',
      },
      {
        text: 'link 链接',
        link: '/components/basic/link/',
      },
    ],
  },
  {
    text: 'Form 表单组件',
    link: '/components/form/',
    children: [
      {
        text: 'date-selector 日期选择器',
        link: '/components/form/date-selector/',
      },
    ],
  },
  {
    text: 'Data 数据展示',
    link: '/components/data/',
    children: [
      {
        text: 'card 卡片',
        link: '/components/data/card',
      },
      {
        text: 'badge 徽章',
        link: '/components/data/badge',
      },
    ],
  },
  {
    text: 'Navigation 导航组件',
    link: '/components/navigation/',
  },
  {
    text: 'Feedback 反馈组件',
    link: '/components/feedback/',
    children: [
      {
        text: 'dialog 对话框',
        link: '/components/feedback/dialog/',
      },
      {
        text: 'message 消息提示',
        link: '/components/feedback/message/',
      },
    ],
  },
  {
    text: 'Others 其他',
    link: '/components/others/',
  },
];

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Halo-UI组件库',
  description: '🏕️ 基于vue3的UI组件库',
  head: [['link', { rel: 'icon', href: '/images/tkui.ico' }]],
  theme: defaultTheme({
    logo: '/images/tkui.png',
    navbar: [
      {
        text: '🦁 快速上手',
        link: '/guide/getting-started.md',
      },
      {
        text: '🕊️ 组件',
        link: '/components/index.md',
      },
      {
        text: '🛸 GitHub',
        link: 'https://github.com/WangKang1555/Halo-UI',
      },
    ],
    sidebar: {
      '/guide/': sidebarProject,
      '/changelog/': sidebarProject,
      '/components/': siderbarComponents,
    },
  }),
});
