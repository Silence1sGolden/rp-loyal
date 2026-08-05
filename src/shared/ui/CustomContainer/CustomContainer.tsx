import { ReactNode } from 'react';
import { clsx } from '@/shared/utils/utils';
import style from './CustomContainer.module.scss';

type TCustomContainerProps = {
  children?: ReactNode;
  className?: string;
};

export function CustomContainer({
  children,
  className,
}: TCustomContainerProps) {
  return <div className={clsx([style.container, className])}>{children}</div>;
}
