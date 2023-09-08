import type { App } from 'vue';
import Message from './feedback/message';   // 消息提示
import HIcon from './basic/icon';          // 图标
import HButton from './basic/button';     // 按钮
import HCollapse from './basic/collapse'; // 折叠面板
import HLink from './basic/link';       // 链接
import HBadge from './data/badge';   // 徽标数
import HCard from './data/card';  // 卡片
import HDialog from './feedback/dialog';  // 对话框
import HDateSelector from './form/date-selector'; // 日期选择器
import HEllipsis from './basic/ellipsis'; // 文本省略号
import HInput from './form/input';  // 输入框



// docs 用
import HIconCard from './docs/HIconCard';  // icon
import HDialogCard from './docs/HDialogCard';  // 输入框
import HDateSelectorCard from './docs/HDateSelectorCard';  // 日期选择器
import HMessageCard from './docs/HMessageCard';  // 消息提示

const plugins = [
  Message,
  HIcon,
  HButton,
  HCollapse,
  HLink,
  HBadge,
  HCard,
  HDialog,
  HDateSelector,
  HEllipsis,
  HInput,
  HIconCard,
  HDialogCard,
  HDateSelectorCard,
  HMessageCard
];

const install = (app: App) => {
  plugins.forEach((plugin) => app.use(plugin as any));
};

export default { install };
export {
  Message,
  HIcon,
  HButton,
  HCollapse,
  HLink,
  HBadge,
  HCard,
  HDialog,
  HDateSelector,
  HEllipsis,
  HInput,
  HIconCard,
  HDialogCard,
  HDateSelectorCard,
  HMessageCard
};
