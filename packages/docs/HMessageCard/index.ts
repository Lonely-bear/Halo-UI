import type { App } from 'vue';
import HMessageCard from './HMessageCard.vue';

HMessageCard.name = 'HMessageCard';
HMessageCard.install = (app: App) => {
  app.component(HMessageCard.name, HMessageCard);
};

export default HMessageCard;
