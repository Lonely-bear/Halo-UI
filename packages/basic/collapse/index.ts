import type { App } from 'vue';
import HCollapse from './src/collapse.vue';

HCollapse.name = 'HCollapse';
HCollapse.install = (app: App) => {
  app.component(HCollapse.name, HCollapse);
};

export default HCollapse;
