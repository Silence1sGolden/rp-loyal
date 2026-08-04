import { ReactNode } from 'react';
import { clsx } from '@/shared/utils/utils';
import style from './CustomSection.module.scss';

type TCustomSectionProps = {
  variant: 'primary' | 'secondary';
  display?: 'flex' | 'grid';
  classNameContent?: string;
  classNameSection?: string;
  children?: ReactNode;
};

export function CustomSection({
  variant,
  display = 'flex',
  classNameContent,
  classNameSection,
  children,
}: TCustomSectionProps) {
  return (
    <section
      className={clsx([style.section, style[variant], classNameSection])}
    >
      <div className={clsx([style.content, classNameContent, style[display]])}>
        {children}
      </div>
    </section>
  );
}
