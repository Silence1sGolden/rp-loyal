import { ReactNode } from 'react';
import style from './HeaderContainer.module.scss';

type THeaderContainerProps = {
  children?: ReactNode;
};

export function HeaderContainer({ children }: THeaderContainerProps) {
  return <header className={style.header}>{children}</header>;
}
