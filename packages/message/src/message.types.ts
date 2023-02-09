export type MessageTypes = 'primary' | 'success' | 'danger' | 'warn';

export interface MessageOptions {
  message: string;
  type?: MessageTypes;
  dark?: Boolean,
  duration?: number;
  offset?: number;
  isClose?: boolean,
  onClose?: () => void;
}

export type MessageParams = MessageOptions | string;
