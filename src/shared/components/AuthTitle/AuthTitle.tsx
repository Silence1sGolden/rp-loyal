import { ReactNode } from 'react';
import style from './AuthTitle.module.scss';

type TAuthTitleProps = {
  title: string;
  subtitle: string;
  topSlot?: ReactNode;
};

export function AuthTitle({ title, subtitle, topSlot }: TAuthTitleProps) {
  return (
    <div className={style.container}>
      {topSlot}
      <h1 className={style.title}>{title}</h1>
      <p className={style.subtitle}>{subtitle}</p>
    </div>
  );
}
