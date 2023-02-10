import type { App } from 'vue';
import HDateSelector from './src/date-selector.vue';

HDateSelector.name = 'HDateSelector';
HDateSelector.install = (app: App) => {
  app.component(HDateSelector.name, HDateSelector);
};

export default HDateSelector;
