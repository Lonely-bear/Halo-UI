import type { App } from 'vue';
import HDialogCard from './HDialogCard.vue';

HDialogCard.name = 'HDialogCard';
HDialogCard.install = (app: App) => {
  app.component(HDialogCard.name, HDialogCard);
};

export default HDialogCard;
