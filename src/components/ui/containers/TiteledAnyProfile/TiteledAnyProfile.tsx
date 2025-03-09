import { ReactElement } from 'react';
import { TiteledAnyProfileProps } from './types';
import style from './TiteledAnyProfile.module.scss';

export function TiteledAnyProfile({
  imageSRC,
  title,
  subtitle,
}: TiteledAnyProfileProps): ReactElement {
  return (
    <div className={style.container}>
      <img
        className={style.avatar}
        width={100}
        height={100}
        src={imageSRC}
        alt={title}
      />
      <div className={style.textContainer}>
        <h2 className={style.title}>{title}</h2>
        {subtitle && <p className={style.subtitle}>{subtitle}</p>}
      </div>
    </div>
  );
}
