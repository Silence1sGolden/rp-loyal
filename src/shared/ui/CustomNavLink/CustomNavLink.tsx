import { ReactNode, RefAttributes } from 'react';
import { NavLink, NavLinkProps } from 'react-router';
import { clsx } from '@/shared/utils/utils';
import style from './CustomNavLink.module.scss';

type TCustomNavLinkProps = {
  variant?: 'primary' | 'empty' | 'secondary';
  fontSize?: '12' | '14';
  padding?: '6x12' | '10x20';
  active?: boolean;
  children?: ReactNode;
} & NavLinkProps &
  RefAttributes<HTMLAnchorElement>;

export function CustomNavLink({
  variant = 'primary',
  fontSize = '12',
  padding = '6x12',
  active,
  children,
  ...other
}: TCustomNavLinkProps) {
  return (
    <NavLink
      {...other}
      className={clsx([
        style.link,
        active && style.active,
        style[variant],
        style[`font_${fontSize}`],
        style[`padding_${padding}`],
      ])}
    >
      {children}
    </NavLink>
  );
}
