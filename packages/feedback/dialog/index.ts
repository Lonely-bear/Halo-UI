import type { App } from 'vue';
import HDialog from './src/dialog.vue';

HDialog.name = 'HDialog';
HDialog.install = (app: App) => {
  app.component(HDialog.name, HDialog);
};

export default HDialog;
