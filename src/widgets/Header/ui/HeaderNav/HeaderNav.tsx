import { ReactNode } from 'react';
import { useLocation } from 'react-router';
import BookOpen from '@/shared/assets/icons/BookOpen.svg?react';
import Home from '@/shared/assets/icons/Home.svg?react';
import Messages from '@/shared/assets/icons/Messages.svg?react';
import ProfileCard from '@/shared/assets/icons/ProfileCard.svg?react';
import style from './HeaderNav.module.scss';
import { HeaderNavLink } from '../HeaderNavLink/HeaderNavLink';

type TNavItem = {
  label: string;
  page: string;
  icon: ReactNode;
};

const links: TNavItem[] = [
  {
    label: 'Home',
    page: '/',
    icon: <Home className={style.icon} />,
  },
  {
    label: 'Stories',
    page: '/stories',
    icon: <BookOpen className={style.icon} />,
  },
  {
    label: 'Messages',
    page: '/messages',
    icon: <Messages className={style.icon} />,
  },
  {
    label: 'Profile',
    page: '/profile',
    icon: <ProfileCard className={style.icon} />,
  },
];

export function HeaderNav() {
  const location = useLocation();

  return (
    <nav className={style.nav}>
      {links.map((i) => (
        <HeaderNavLink
          key={i.label}
          {...i}
          active={i.page === location.pathname}
        />
      ))}
    </nav>
  );
}
