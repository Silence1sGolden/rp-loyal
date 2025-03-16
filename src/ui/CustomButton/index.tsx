import { ReactElement } from 'react';
import style from './CustomButton.module.scss';

interface TButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function CustomButton(props: TButton): ReactElement {
  return (
    <button className={style.button} {...props}>
      {props.text}
    </button>
  );
}
