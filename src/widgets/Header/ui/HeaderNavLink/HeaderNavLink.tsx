import { ReactNode } from 'react';
import { NavLink } from 'react-router';
import { clsx } from '@/shared/utils/utils';
import style from './HeaderNavLink.module.scss';

type THeaderNavLinkProps = {
  page: string;
  active?: boolean;
  label?: string;
  icon?: ReactNode;
};

export function HeaderNavLink({
  page,
  active,
  label,
  icon,
}: THeaderNavLinkProps) {
  return (
    <NavLink className={clsx([style.link, active && style.active])} to={page}>
      {icon}
      {label}
    </NavLink>
  );
}
