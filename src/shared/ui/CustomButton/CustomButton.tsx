import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ForwardedRef,
  type JSX,
} from 'react';
import { clsx } from '@/shared/utils/utils';
import style from './CustomButton.module.scss';

type TCustomButtonProps = {
  variant?: 'primary' | 'secondary' | 'empty';
  padding?: '6x16' | '6x6' | '12x24';
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Component(
  {
    children,
    className,
    type = 'button',
    variant = 'primary',
    padding = '6x6',
    ...other
  }: TCustomButtonProps,
  ref?: ForwardedRef<HTMLButtonElement>
) {
  return (
    <button
      ref={ref}
      className={clsx([
        style.button,
        className,
        style[variant],
        style[`padding_${padding}`],
      ])}
      type={type}
      {...other}
    >
      {children}
    </button>
  );
}

export const CustomButton = forwardRef(Component) as (
  props: TCustomButtonProps & {
    ref?: ForwardedRef<HTMLButtonElement>;
  }
) => JSX.Element;
