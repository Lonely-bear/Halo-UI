import type { App } from 'vue';
import Message from './feedback/message';
import HIcon from './basic/icon';
import HButton from './basic/button';
import HLink from './basic/link';
import HBadge from './data/badge';
import HCard from './data/card';
import HDialog from './feedback/dialog';
import HDateSelector from './form/date-selector';

const plugins = [
  Message,
  HIcon,
  HButton,
  HLink,
  HBadge,
  HCard,
  HDialog,
  HDateSelector,
];

const install = (app: App) => {
  plugins.forEach((plugin) => app.use(plugin as any));
};

export default { install };
export {
  Message,
  HIcon,
  HButton,
  HLink,
  HBadge,
  HCard,
  HDialog,
  HDateSelector,
};
