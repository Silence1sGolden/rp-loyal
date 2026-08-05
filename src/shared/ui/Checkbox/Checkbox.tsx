import { ForwardedRef, forwardRef, InputHTMLAttributes, JSX } from 'react';
import CheckSquare from '@/shared/assets/icons/CheckSquare.svg?react';
import Square from '@/shared/assets/icons/Square.svg?react';
import { clsx } from '@/shared/utils/utils';
import style from './Checkbox.module.scss';

type TCheckboxProps = {
  className?: string;
  classNameContainer?: string;
  classNameIcon?: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (...items: any[]) => void;
} & InputHTMLAttributes<HTMLInputElement>;

function Component(
  {
    className,
    classNameContainer,
    classNameIcon,
    onChange,
    ...other
  }: TCheckboxProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div className={clsx([style.checkbox, classNameContainer])}>
      {other.checked ? (
        <CheckSquare
          className={clsx([style.icon, classNameIcon])}
          onClick={onChange}
        />
      ) : (
        <Square
          className={clsx([style.icon, classNameIcon])}
          onClick={onChange}
        />
      )}
      <input
        {...other}
        className={clsx([style.input, className])}
        ref={ref}
        type="checkbox"
      />
    </div>
  );
}

export const CheckBox = forwardRef(Component) as (
  props: TCheckboxProps & {
    ref?: ForwardedRef<HTMLInputElement>;
  }
) => JSX.Element;
