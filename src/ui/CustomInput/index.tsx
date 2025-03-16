import React from 'react';
import style from './CustomInput.module.scss';
import clsx from 'clsx';

interface ICustomInput extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export function CustomInput(props: ICustomInput) {
  return (
    <input
      className={clsx(style.input, props.error && style.error)}
      {...props}
    />
  );
}
