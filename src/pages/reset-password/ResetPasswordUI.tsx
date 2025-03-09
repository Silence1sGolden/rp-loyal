import { ReactElement, SyntheticEvent, useRef, useState } from 'react';
import { ColorText } from '../../components/ui/components/ColoredText/ColoredText';
import { Input } from '../../components/input/Input';
import { Link } from 'react-router';
import style from './ResetPassword.module.scss';

interface ResetPasswordUIProps {
  onSubmit: (data: { email: string }) => void;
}

export function ResetPasswordUI({
  onSubmit,
}: ResetPasswordUIProps): ReactElement {
  const [valid, setValid] = useState<boolean>(true);
  const form = useRef<HTMLFormElement>(null);

  const checkValid = () => {
    if (form.current?.checkValidity()) {
      setValid(false);
    } else {
      setValid(true);
    }
  };

  const onSubmitForm = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    const email = (
      (e.target as HTMLFormElement).querySelector(
        'input[name="email"]'
      ) as HTMLInputElement
    ).value;
    onSubmit({ email });
  };

  return (
    <main className={style.container}>
      <ColorText
        className={style.h1}
        shell="h1"
        text="ВОССТАНОВЛЕНИЕ ПАРОЛЯ"
        time={1000}
      />
      <form ref={form} className={style.form} onSubmit={onSubmitForm}>
        <Input
          name="email"
          placeholder="Почта"
          type="email"
          required
          onChange={checkValid}
        />
        <button className={style.submit} type="button" disabled={valid}>
          Восстановить пароль
        </button>
      </form>
      <Link className={style.link} to="/login">
        Войти
      </Link>
      <Link className={style.link} to="/register">
        Регистрация
      </Link>
    </main>
  );
}
