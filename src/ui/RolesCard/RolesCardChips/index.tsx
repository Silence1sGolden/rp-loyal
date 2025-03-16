import clsx from 'clsx';
import style from './RolesCardChips.module.scss';

type TRolesCardChips = {
  text: string;
  color: 'peach' | 'lavander';
};

export function RolesCardChips({ text, color }: TRolesCardChips) {
  return <span className={clsx(style.chip, style[color])}>{text}</span>;
}
