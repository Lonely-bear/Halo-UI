import type { App } from 'vue';
import HInput from './src/input.vue';

HInput.name = 'HInput';
HInput.install = (app: App) => {
  app.component(HInput.name, HInput);
};

export default HInput;
