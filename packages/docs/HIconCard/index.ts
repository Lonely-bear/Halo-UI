import type { App } from 'vue';
import HIconCard from './HIconCard.vue';

HIconCard.name = 'HIconCard';
HIconCard.install = (app: App) => {
  app.component(HIconCard.name, HIconCard);
};

export default HIconCard;
