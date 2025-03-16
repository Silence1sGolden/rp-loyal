import { ReactNode } from 'react';
import style from './SomethingWithTitle.module.scss';

type TSomethingWithTitle = {
  title: string;
  children?: ReactNode;
};

export function SomethingWithTitle({ title, children }: TSomethingWithTitle) {
  return (
    <div className={style.container}>
      <h4 className={style.title}>{title}</h4>
      {children}
    </div>
  );
}
