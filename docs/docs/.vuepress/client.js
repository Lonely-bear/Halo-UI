import { defineClientConfig } from '@vuepress/client'
// 引入 HaloUI
import HaloUI from '../../../packages'
// 引入 uiw icons
import '@uiw/icons/fonts/w-icon.css';

export default defineClientConfig({
  enhance({ app, router, siteData }){
    app.use(HaloUI);
  },
})