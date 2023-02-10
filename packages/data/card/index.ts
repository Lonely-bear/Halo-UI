import type { App } from 'vue';
import HCard from './src/card.vue';

HCard.name = 'HCard';
HCard.install = (app: App) => {
  app.component(HCard.name, HCard);
};

export default HCard;
