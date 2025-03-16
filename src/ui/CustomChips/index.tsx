import { Link } from 'react-router';
import style from './CustomChips.module.scss';
import clsx from 'clsx';

type TCustomChips = {
  to: string;
  text: string;
  color?: 'lavander' | 'peach' | 'gray';
};

export function CustomChips({ to, text, color = 'gray' }: TCustomChips) {
  return (
    <Link to={to} className={clsx(style.link, style[color])}>
      {text}
    </Link>
  );
}
