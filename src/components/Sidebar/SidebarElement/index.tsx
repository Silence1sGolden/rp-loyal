import { Link, useLocation } from 'react-router';
import style from './SidebarElement.module.scss';
import clsx from 'clsx';

type TSidebarElement = {
  to: string;
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
      titleId?: string;
      desc?: string;
      descId?: string;
    }
  >;
  title: string;
};

export function SidebarElement({ to, Icon, title }: TSidebarElement) {
  const location = useLocation();

  return (
    <Link
      className={clsx(style.link, location.pathname === to && style.this)}
      to={to}
    >
      <Icon className={style.icon} />
      <span className={style.title}>{title}</span>
    </Link>
  );
}
