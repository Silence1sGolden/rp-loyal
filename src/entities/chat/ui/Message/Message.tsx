import { clsx } from '@/shared/utils/utils';
import style from './Message.module.scss';

type TMessageProps = {
  type: 'event' | 'action' | 'dialogue' | 'thought';
  text: string;
  me?: boolean;
};

export function Message({ text, type, me }: TMessageProps) {
  return (
    <div className={clsx([style.message, me && style.me, style[type]])}>
      <span className={style.type}>{type}</span>
      <p className={style.text}>{text}</p>
    </div>
  );
}
