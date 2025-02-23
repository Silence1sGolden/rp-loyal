import { ReactElement, SyntheticEvent, useRef, useState } from 'react';
import { Link } from 'react-router';
import style from './Register.module.scss';
import { ColorText } from '../../components/color-text/ColorText';
import { Input } from '../../components/input/Input';
import { RegisterUserData } from '../../utils/multi-api';

interface RegisterUIProps {
  onSubmit: (data: RegisterUserData) => void;
}

export function RegisterUI({ onSubmit }: RegisterUIProps): ReactElement {
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
    const name = (
      (e.target as HTMLFormElement).querySelector(
        'input[name="name"]'
      ) as HTMLInputElement
    ).value;
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
    onSubmit({ name, email, password });
  };

  return (
    <div className={style.container}>
      <ColorText
        className={style.h1}
        shell="h1"
        text="РЕГИСТРАЦИЯ"
        time={1000}
      />
      <form
        ref={form}
        className={style.form}
        onChange={() => checkValid()}
        onSubmit={onSubmitForm}
      >
        <Input
          placeholder="Имя"
          name="name"
          type="text"
          required
          pattern="^[A-Za-zА-Яа-я0-9ёЁ]+$"
          maxLength={14}
          minLength={4}
          onChange={checkValid}
        />
        <Input
          onChange={checkValid}
          name="email"
          placeholder="Почта"
          type="email"
          required
        />
        <Input
          name="password"
          placeholder="Пароль"
          type="password"
          required
          onChange={checkValid}
        />
        <button className={style.submit} type="submit" disabled={valid}>
          Поехали
        </button>
      </form>
      <Link className={style.link} to="/login">
        Уже есть аккаунт? Войти
      </Link>
    </div>
  );
}
