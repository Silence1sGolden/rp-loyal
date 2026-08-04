import { clsx } from '@/shared/utils/utils';
import style from './Divider.module.scss';

type TDividerProps = {
  text?: string;
  className?: string;
};

export function Divider({ text, className }: TDividerProps) {
  return (
    <div className={clsx([style.divider, className])}>
      <span className={style.line}></span>
      {text && (
        <>
          <span className={style.text}>{text}</span>
          <span className={style.line}></span>
        </>
      )}
    </div>
  );
}
