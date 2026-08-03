import { ReactNode } from 'react';
import style from './MainLayout.module.scss';

type TMainLayoutProps = {
  children?: ReactNode;
};

export function MainLayout({ children }: TMainLayoutProps) {
  return <main className={style.main}>{children}</main>;
}
