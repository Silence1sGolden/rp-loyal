import { ReactElement } from 'react';
import style from './Chip.module.scss';
import { ChipProps } from './types';

export function Chip({ text }: ChipProps): ReactElement {
  return (
    <div className={style.div}>
      <p className={style.p}>{text}</p>
    </div>
  );
}
