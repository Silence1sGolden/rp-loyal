import { ReactElement } from 'react';
import { Link } from 'react-router';
import style from './Header.module.scss';

export function Header(): ReactElement {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <Link className={style.link} to="/profile">
          Главная
        </Link>
        <Link className={style.link} to="/profile">
          Профиль
        </Link>
      </nav>
    </header>
  );
}
