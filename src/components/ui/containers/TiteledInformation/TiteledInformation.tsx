import { ReactElement } from 'react';
import { TiteledInformationProps } from './types';
import style from './TiteledInformation.module.scss';

export function TiteledInformation({
  title,
  text,
}: TiteledInformationProps): ReactElement {
  return (
    <div className={style.information}>
      <h2 className={style.title}>{title}</h2>
      <p className={style.text}>{text}</p>
    </div>
  );
}
