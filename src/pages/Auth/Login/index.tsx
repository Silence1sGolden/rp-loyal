import { useForm } from 'react-hook-form';
import style from '../Auth.module.scss';
import { CustomInput } from '@/ui/CustomInput';
import { CustomButton } from '@/ui/CustomButton';
import { Link } from 'react-router';

type TLogin = {
  username: string;
  password: string;
};

export default function PageLogin() {
  const { register, handleSubmit } = useForm<TLogin>();

  const onSubmitForm = () => {
    console.log('Hello');
  };

  return (
    <main className={style.main}>
      <div className={style.container}>
        <h1 className={style.title}>Войти</h1>
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
            text="Войти"
          />
        </div>
        <div className={style.other}>
          <Link className={style.link} to="/reset-password">
            Забыл пароль
          </Link>
          <Link className={style.link} to="/register">
            Регистрация
          </Link>
        </div>
      </div>
    </main>
  );
}
