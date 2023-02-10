import type { App } from 'vue';
import HBadge from './src/badge.vue';

HBadge.name = 'HBadge';
HBadge.install = (app: App) => {
  app.component(HBadge.name, HBadge);
};

export default HBadge;
