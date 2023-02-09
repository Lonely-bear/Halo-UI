import { createVNode, render, type VNode } from 'vue';
import type { MessageParams } from './message.types';
import MessageVue from './message.vue'

const VNodeList: VNode[] = [];

export default function Message(options: MessageParams) {
  if (typeof options === 'string') {
    options = {
      message: options,
    };
  }

  let offset = options.offset || 20;
  VNodeList.forEach((vm) => {
    offset += vm.el!.offsetHeight + 20;
  });

  let userClose = options.onClose;
  let ops = {
    onClose: () => {
      userClose?.();
    },
    ...options,
    offset,
  };

  // 创建虚拟节点，并将选项当作参数传入
  const vm = createVNode(MessageVue, ops as any);
  // 将虚拟节点通过render渲染器渲染为实体节点
  const container = document.createElement('div');
  render(vm, container);
  vm.props!.onDestroy = () => {
    VNodeList.shift();
    VNodeList.forEach((itemVm) => {
      itemVm.props!.offset -= 57;
      itemVm.el!.style.top = `${itemVm.props!.offset}px`;
    });
    render(null, container);
  };
  // 将实体节点插入body中
  document.body.appendChild(container.lastElementChild!);
  // 将虚拟节点插入数组中
  VNodeList.push(vm);
}
