import { useForm } from 'react-hook-form';
import style from '../Auth.module.scss';
import styles from './Register.module.scss';
import { CustomInput } from '@/ui/CustomInput';
import { CustomButton } from '@/ui/CustomButton';
import { Link } from 'react-router';
import clsx from 'clsx';
import Google from '@/icons/google.svg?react';
import VK from '@/icons/vk.svg?react';

type TRegister = {
  username: string;
  password: string;
};

export default function PageRegister() {
  const { register, handleSubmit } = useForm<TRegister>();

  const onSubmitForm = () => {
    console.log('Hello');
  };

  return (
    <main className={style.main}>
      <div className={style.container}>
        <h1 className={style.title}>Регистрация</h1>
        <div className={style.form}>
          <CustomInput
            {...register('username', {
              required: true,
            })}
            placeholder="Username"
          />
          <CustomInput
            {...register('password', {
              required: true,
            })}
            type="password"
            placeholder="Password"
          />
          <CustomButton
            onClick={() => handleSubmit(onSubmitForm)}
            text="Зарегистрироваться"
          />
          <div className={styles.authWith}>
            <a href="google.com" target="__blank">
              <Google className={styles.icon} />
            </a>
            <a href="vk.com" target="__blank">
              <VK className={styles.icon} />
            </a>
          </div>
        </div>
        <div className={clsx(style.other, styles.other)}>
          <Link className={style.link} to="/login">
            Вход
          </Link>
        </div>
      </div>
    </main>
  );
}
