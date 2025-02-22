import clsx from 'clsx';
import { ChangeEvent, ReactElement, useState } from 'react';
import style from './Input.module.scss';

interface InputProps {
  type: 'text' | 'number' | 'email' | 'password' | 'range';
  name: string;
  autoValue?: string;
  onChange?: () => void;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
  max?: string | number;
  min?: string | number;
  maxLength?: number;
  minLength?: number;
  id?: string;
  step?: string | number;
}

export function Input({
  type,
  name,
  placeholder,
  autoValue,
  required,
  pattern,
  min,
  max,
  maxLength,
  minLength,
  onChange,
  id,
  step,
}: InputProps): ReactElement {
  const [value, setValue] = useState<string>(autoValue || '');
  const [error, setError] = useState<string>('');

  function onValueChange(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.validity.valueMissing) {
      if (!e.target.validity.tooShort) {
        if (e.target.validity.patternMismatch) {
          setError('Доступна только латиница и кириллица, а так же цифры');
        } else {
          if (e.target.validity.typeMismatch) {
            setError('Значение невалидно');
          } else {
            setError('');
          }
        }
      } else {
        setError(`Минимальная длина ${min || minLength || ''} символа`);
      }
    } else {
      setError('Это поле обязательное');
    }
    setValue(e.target.value);
    if (onChange) onChange();
  }

  return (
    <div className={style.input_container}>
      <input
        className={clsx(style.input, error && style.input_error)}
        name={name}
        onChange={onValueChange}
        type={type}
        placeholder={clsx(placeholder)}
        value={value}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        max={max}
        min={min}
        autoComplete="off"
        id={id}
        step={step}
      />
      <span
        className={clsx(
          style.input_error_text,
          error && style.input_error_text_show
        )}
      >
        {error}
      </span>
    </div>
  );
}
