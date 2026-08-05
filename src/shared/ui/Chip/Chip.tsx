import { ButtonHTMLAttributes, RefAttributes } from 'react';
import { NavLink, NavLinkProps } from 'react-router';
import { clsx } from '@/shared/utils/utils';
import style from './Chip.module.scss';

type TBaseChip = {
  label: string;
  className?: string;
};

type TChipLink = TBaseChip & {
  component: typeof NavLink;
} & NavLinkProps &
  RefAttributes<HTMLAnchorElement>;

type TChipButton = TBaseChip & {
  component?: never;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type TChipProps = TChipLink | TChipButton;

export function Chip({
  label,
  className,
  component: Component,
  ...other
}: TChipProps) {
  if (Component === NavLink) {
    return (
      <NavLink
        {...(other as TChipLink)}
        className={clsx([style.chip, className])}
      >
        {label}
      </NavLink>
    );
  }

  return (
    <button
      {...(other as TChipButton)}
      type="button"
      className={clsx([style.chip, className])}
    >
      {label}
    </button>
  );
}
