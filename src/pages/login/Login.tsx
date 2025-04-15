import { Input } from '@/components/ui/components/Input/Input';
import style from './Login.module.scss';
import { Button } from '@/components/ui/components/Button/Button';
import { Link, useNavigate } from 'react-router';
import { ChangeEvent, useState } from 'react';
import { loginApi, sendCodeApi } from '@/utils/multi-api';

export function Login() {
  const [email, setEmail] = useState<string>('');
  const [pas, setPas] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);
  const navigate = useNavigate();

  const sendCode = () => {
    sendCodeApi({ email: email, code: code })
      .then((res) => {
        if (res.status) {
          navigate('#');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginUser = () => {
    loginApi({ email: email, password: pas })
      .then((res) => {
        if (res.status) {
          setShow(res.status);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <main className={style.container}>
        <h1 className={style.title}>Вход</h1>
        <div className={style.form}>
          <Input
            type="email"
            placeholder="Почта"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <Input
            type="password"
            placeholder="Пароль"
            value={pas}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPas(e.target.value)
            }
          />
          <Button type="submit" text="Войти" onClick={loginUser} />
        </div>
        <div className={style.other}>
          <Link className={style.link} to="#">
            Забыл пароль
          </Link>
          <Link className={style.link} to="#">
            Регистрация
          </Link>
        </div>
      </main>
      {show && (
        <div className={style.modal}>
          <div className={style.modal_container}>
            <p className={style.title}>Код отправлен на вашу почту</p>
            <Input
              type="text"
              placeholder="Код"
              value={code}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCode(e.target.value)
              }
            />
            <Button type="submit" text="Подтвердить" onClick={sendCode} />
          </div>
        </div>
      )}
    </>
  );
}
