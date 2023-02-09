import type { App } from 'vue';
import Message from './message';
import HIcon from './icon';

const plugins = [Message, HIcon];

const install = (app: App) => {
  plugins.forEach((plugin) => app.use(plugin as any));
};

export default { install };
export { Message, HIcon };
