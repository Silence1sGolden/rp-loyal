import { ReactNode } from 'react';
import style from './MainWidgetImpactItem.module.scss';

type TMainWidgetImpactItemProps = {
  number: number;
  icon: ReactNode;
  title: string;
  subtitle: string;
};

export function MainWidgetImpactItem({
  number,
  icon,
  title,
  subtitle,
}: TMainWidgetImpactItemProps) {
  return (
    <li className={style.impact}>
      <span className={style.number}>{`0${number}`}</span>
      {icon}
      <h3 className={style.title}>{title}</h3>
      <p className={style.subtitle}>{subtitle}</p>
    </li>
  );
}
