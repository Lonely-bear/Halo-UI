import type { App } from 'vue';
import HEllipsis from './src/ellipsis.vue';

HEllipsis.name = 'HEllipsis';
HEllipsis.install = (app: App) => {
  app.component(HEllipsis.name, HEllipsis);
};

export default HEllipsis;
