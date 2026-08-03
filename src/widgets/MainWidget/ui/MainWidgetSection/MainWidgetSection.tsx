import { ReactNode } from 'react';
import { clsx } from '@/shared/utils/utils';
import style from './MainWidgetSection.module.scss';

type TMainWidgetSectionProps = {
  variant: 'primary' | 'secondary';
  display?: 'flex' | 'grid';
  className?: string;
  children?: ReactNode;
};

export function MainWidgetSection({
  variant,
  display = 'flex',
  className,
  children,
}: TMainWidgetSectionProps) {
  return (
    <section className={clsx([style.section, style[variant]])}>
      <div className={clsx([style.content, className, style[display]])}>
        {children}
      </div>
    </section>
  );
}
