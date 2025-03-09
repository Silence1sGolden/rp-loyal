import { ReactElement } from 'react';
import style from './Button.module.scss';
import { ButtonProps } from './types';

export function Button({
  text,
  type,
  disabled,
  onClick,
}: ButtonProps): ReactElement {
  return (
    <button
      className={style.button}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
