import { ReactElement, SyntheticEvent, useRef, useState } from 'react';
import { Link } from 'react-router';
import style from './Login.module.scss';
import { ColorText } from '../../components/ui/components/ColoredText/ColoredText';
import { Input } from '../../components/input/Input';
import { LoginUserData } from '../../utils/multi-api';

interface LoginUIProps {
  onSubmit: (data: LoginUserData) => void;
}

export function LoginUI({ onSubmit }: LoginUIProps): ReactElement {
  const [valid, setValid] = useState<boolean>(true);
  const form = useRef<HTMLFormElement>(null);

  const checkValid = () => {
    if (form.current?.checkValidity()) {
      setValid(false);
    } else {
      setValid(true);
    }
  };

  const onFormSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    const email = (
      (e.target as HTMLFormElement).querySelector(
        'input[name="email"]'
      ) as HTMLInputElement
    ).value;
    const password = (
      (e.target as HTMLFormElement).querySelector(
        'input[name="password"]'
      ) as HTMLInputElement
    ).value
      .split('')
      .map((item) => item.charCodeAt(0))
      .join('');
    onSubmit({ email, password });
  };

  return (
    <main className={style.container}>
      <ColorText className={style.h1} shell="h1" text="ВХОД" time={1000} />
      <form ref={form} className={style.form} onSubmit={onFormSubmit}>
        <Input
          name="email"
          placeholder="Почта"
          type="email"
          required
          autoValue={localStorage.getItem('email') || undefined}
          onChange={checkValid}
        />
        <Input
          name="password"
          placeholder="Пароль"
          type="password"
          required
          maxLength={40}
          minLength={8}
          onChange={checkValid}
        />
        <button className={style.submit} type="submit" disabled={valid}>
          Войти
        </button>
      </form>
      <Link className={style.link} to="/reset-password">
        Забыл пароль
      </Link>
      <Link className={style.link} to="/register">
        Зарегистрироваться
      </Link>
    </main>
  );
}
