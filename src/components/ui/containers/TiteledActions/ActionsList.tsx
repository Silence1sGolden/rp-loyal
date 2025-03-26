import { ReactNode } from 'react';
import style from './ActionsList.module.scss';

interface ActionsListProps {
  children?: ReactNode;
}

export function ActionsList({ children }: ActionsListProps) {
  return <div className={style.container}>{children}</div>;
}
