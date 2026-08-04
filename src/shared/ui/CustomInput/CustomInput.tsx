import { ForwardedRef, forwardRef, InputHTMLAttributes, JSX } from 'react';
import { clsx } from '@/shared/utils/utils';
import style from './CustomInput.module.scss';

type TCustomInputProps = {
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Component(
  { className, ...other }: TCustomInputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <input {...other} className={clsx([style.input, className])} ref={ref} />
  );
}

export const CustomInput = forwardRef(Component) as (
  props: TCustomInputProps & {
    ref?: ForwardedRef<HTMLInputElement>;
  }
) => JSX.Element;
