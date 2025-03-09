import { ReactElement } from 'react';
import style from './Input.module.scss';
import clsx from 'clsx';
import { InputProps } from './types';

export function Input({
  type,
  value,
  placeholder,
  className,
  onChange,
}: InputProps): ReactElement {
  return (
    <input
      onChange={onChange}
      className={clsx([style.input, className])}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
}
