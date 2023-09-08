import type { App } from 'vue';
import HDateSelectorCard from './HDateSelectorCard.vue';

HDateSelectorCard.name = 'HDateSelectorCard';
HDateSelectorCard.install = (app: App) => {
  app.component(HDateSelectorCard.name, HDateSelectorCard);
};

export default HDateSelectorCard;
