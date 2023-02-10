import type { App } from 'vue';
import IconVue from '../icon/src/icon.vue';

IconVue.name = 'HIcon';
IconVue.install = (app: App) => {
  app.component(IconVue.name, IconVue);
};

export default IconVue;
