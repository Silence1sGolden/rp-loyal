import { ReactElement } from 'react';
import style from './Sidebar.module.scss';
import { Link, useLocation } from 'react-router';
import { clsx } from 'clsx';

export function Sidebar(): ReactElement {
  const path = useLocation().pathname;

  return (
    <div className={style.sidebar}>
      <nav className={style.nav}>
        <Link
          to="/profile"
          className={clsx(style.link, path === '/profile' && style.link_active)}
        >
          Profile
        </Link>
        <Link
          to="/chat"
          className={clsx(style.link, path === '/chat' && style.link_active)}
        >
          Chat
        </Link>
      </nav>
      <div className={style.helper}>//\\</div>
    </div>
  );
}
