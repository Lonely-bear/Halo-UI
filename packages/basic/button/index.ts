import type { App } from 'vue';
import HButton from './src/button.vue';

HButton.name = 'HButton';
HButton.install = (app: App) => {
  app.component(HButton.name, HButton);
};

export default HButton;
