import { LabelHTMLAttributes } from 'react';
import { clsx } from '@/shared/utils/utils';
import style from './CustomLabel.module.scss';

type TCustomLabelProps = {
  label: string;
  className?: string;
} & LabelHTMLAttributes<HTMLLabelElement>;

export function CustomLabel({ label, className, ...other }: TCustomLabelProps) {
  return (
    <label {...other} className={clsx([style.label, className])}>
      {label}
    </label>
  );
}
