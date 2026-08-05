import { ReactNode } from 'react';
import { useLocation } from 'react-router';
import BookOpen from '@/shared/assets/icons/BookOpen.svg?react';
import Home from '@/shared/assets/icons/Home.svg?react';
import Messages from '@/shared/assets/icons/Messages.svg?react';
import ProfileCard from '@/shared/assets/icons/ProfileCard.svg?react';
import style from './HeaderNav.module.scss';
import { CustomNavLink } from '../../../../shared/ui/CustomNavLink/CustomNavLink';

type TNavItem = {
  label: string;
  to: string;
  icon: ReactNode;
};

const links: TNavItem[] = [
  {
    label: 'Home',
    to: '/',
    icon: <Home className={style.icon} />,
  },
  {
    label: 'Stories',
    to: '/stories',
    icon: <BookOpen className={style.icon} />,
  },
  {
    label: 'Messages',
    to: '/messages',
    icon: <Messages className={style.icon} />,
  },
  {
    label: 'Profile',
    to: '/profile',
    icon: <ProfileCard className={style.icon} />,
  },
];

export function HeaderNav() {
  const location = useLocation();

  return (
    <nav className={style.nav}>
      {links.map((i) => (
        <CustomNavLink
          key={i.label}
          variant="empty"
          to={i.to}
          active={i.to === location.pathname}
        >
          {i.icon}
          {i.label}
        </CustomNavLink>
      ))}
    </nav>
  );
}
