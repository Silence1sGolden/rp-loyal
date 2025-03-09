import { ReactElement } from 'react';
import style from './TiteledChips.module.scss';
import { TiteledChipsProps } from './types';
import { Chip } from '../../components/Chip/Chip';

export function TiteledChips({ title, list }: TiteledChipsProps): ReactElement {
  return (
    <div className={style.div}>
      <h2 className={style.h2}>{title}</h2>
      <div className={style.list}>
        {list.map((elem, index) => (
          <Chip text={elem} key={index} />
        ))}
      </div>
    </div>
  );
}
