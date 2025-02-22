import { ReactElement, ReactNode } from 'react';
import style from './Section.module.scss';

interface SectionProps {
  h2: string;
  children: ReactNode;
}

export function Section({ children, h2 }: SectionProps): ReactElement {
  return (
    <section className={style.section}>
      <h2 className={style.h2}>{h2}</h2>
      <p className={style.p}>{children}</p>
    </section>
  );
}
