import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Eye from '@/shared/assets/icons/Eye.svg?react';
import EyeOff from '@/shared/assets/icons/EyeOff.svg?react';
import Lock from '@/shared/assets/icons/Lock.svg?react';
import User from '@/shared/assets/icons/User.svg?react';
import { CaptionError } from '@/shared/ui/CaptionError/CaptionError';
import { CustomButton } from '@/shared/ui/CustomButton/CustomButton';
import { CustomInput } from '@/shared/ui/CustomInput/CustomInput';
import { CustomLabel } from '@/shared/ui/CustomLabel/CustomLabel';
import { clsx } from '@/shared/utils/utils';
import style from './LoginForm.module.scss';

type TLoginFormState = {
  username: string;
  password: string;
};

export function LoginForm() {
  const [hidePass, setHidePass] = useState<boolean>(true);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TLoginFormState>({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onSubmit',
  });

  const error = errors.username?.message || errors.password?.message;

  const handleToggleHidePass = () => {
    setHidePass(!hidePass);
  };

  const handleSendData = (data: TLoginFormState) => {
    // TODO: добавить авторизацию
    console.error(`data: ${data.username}, ${data.password} - been sended`);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(handleSendData)}>
      <div className={style.block}>
        <CustomLabel
          className={style.label}
          htmlFor="username"
          label="username"
        />
        <Controller
          control={control}
          name="username"
          rules={{
            required: 'Username required.',
          }}
          render={({ field }) => (
            <div className={style.inputContainer}>
              <User className={clsx([style.icon, style.leftIcon])} />
              <CustomInput
                {...field}
                className={style.input}
                id="username"
                name="username"
                type="text"
                placeholder="your_username"
              />
            </div>
          )}
        />
      </div>
      <div className={style.block}>
        <CustomLabel
          className={style.label}
          htmlFor="password"
          label="password"
        />
        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Password required.',
          }}
          render={({ field }) => (
            <div className={style.inputContainer}>
              <Lock className={clsx([style.icon, style.leftIcon])} />
              <CustomInput
                {...field}
                className={style.input}
                type={hidePass ? 'password' : 'text'}
                id="password"
                name="password"
                placeholder="••••••••"
              />
              {hidePass ? (
                <Eye
                  className={clsx([style.icon, style.rightIcon, style.eye])}
                  onClick={handleToggleHidePass}
                />
              ) : (
                <EyeOff
                  className={clsx([style.icon, style.rightIcon, style.eye])}
                  onClick={handleToggleHidePass}
                />
              )}
            </div>
          )}
        />
      </div>

      {error && <CaptionError caption={error} />}
      <CustomButton
        className={style.submit}
        type="submit"
        padding="10x20"
        variant="primary"
      >
        Sign in
      </CustomButton>
    </form>
  );
}
