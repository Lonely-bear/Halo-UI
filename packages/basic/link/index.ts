import type { App } from 'vue';
import HLink from './src/link.vue';

HLink.name = 'HLink';
HLink.install = (app: App) => {
  app.component(HLink.name, HLink);
};

export default HLink;
