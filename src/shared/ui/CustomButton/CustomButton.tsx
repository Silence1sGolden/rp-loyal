import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ForwardedRef,
  type JSX,
  type ReactNode,
} from 'react';
import { clsx } from '@/shared/utils/utils';
import style from './CustomButton.module.scss';

type TCustomButtonProps = {
  text?: string;
  variant?: 'primary' | 'empty' | 'secondary' | 'red' | 'black' | 'sky';
  LeftSideIcon?: ReactNode;
  RightSideIcon?: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Component(
  {
    text,
    variant = 'primary',
    className,
    type = 'button',
    LeftSideIcon,
    RightSideIcon,
    ...other
  }: TCustomButtonProps,
  ref?: ForwardedRef<HTMLButtonElement>
) {
  return (
    <button
      ref={ref}
      className={clsx([style.button, className, style[variant]])}
      type={type}
      {...other}
    >
      {LeftSideIcon && LeftSideIcon}
      {text}
      {RightSideIcon && RightSideIcon}
    </button>
  );
}

export const CustomButton = forwardRef(Component) as (
  props: TCustomButtonProps & {
    ref?: ForwardedRef<HTMLButtonElement>;
  }
) => JSX.Element;
