import { useState } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { NavLink } from 'react-router';
import Eye from '@/shared/assets/icons/Eye.svg?react';
import EyeOff from '@/shared/assets/icons/EyeOff.svg?react';
import Lock from '@/shared/assets/icons/Lock.svg?react';
import Mail from '@/shared/assets/icons/Mail.svg?react';
import User from '@/shared/assets/icons/User.svg?react';
import { CaptionError } from '@/shared/ui/CaptionError/CaptionError';
import { CaptionText } from '@/shared/ui/CaptionText/CaptionText';
import { CheckBox } from '@/shared/ui/Checkbox/Checkbox';
import { CustomButton } from '@/shared/ui/CustomButton/CustomButton';
import { CustomInput } from '@/shared/ui/CustomInput/CustomInput';
import { CustomLabel } from '@/shared/ui/CustomLabel/CustomLabel';
import { clsx } from '@/shared/utils/utils';
import style from './RegistationForm.module.scss';

type TRegistrationFormState = {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;

  ageConfirm: boolean;
  communityGuidelineConfirm: boolean;
  privacyPolicyConfirm: boolean;
};

export function RegistrationForm() {
  const [hidePass, setHidePass] = useState<boolean>(true);
  const [hideRepPass, setHideRepPass] = useState<boolean>(true);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TRegistrationFormState>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',

      ageConfirm: false,
      communityGuidelineConfirm: false,
      privacyPolicyConfirm: false,
    },
    mode: 'onSubmit',
  });

  const error =
    errors.username?.message ||
    errors.email?.message ||
    errors.password?.message ||
    errors.repeatPassword?.message ||
    errors.ageConfirm?.message ||
    errors.communityGuidelineConfirm?.message ||
    errors.privacyPolicyConfirm?.message;
  const passwordWatch = useWatch({ name: 'password', control });

  const handleToggleHidePass = () => {
    setHidePass(!hidePass);
  };

  const handleToggleHideRepPass = () => {
    setHideRepPass(!hideRepPass);
  };

  const handleSubmitForm = (data: TRegistrationFormState) => {
    // TODO: добавить авторизацию
    console.error(
      `data: ${data.username}, ${data.email}, ${data.password} - been sended`
    );
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(handleSubmitForm)}>
      <div className={style.block}>
        <CustomLabel htmlFor="username" label="username" />
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
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                placeholder="your_username"
              />
            </div>
          )}
        />
        <CaptionText caption="This is how other writers will know you." />
      </div>

      <div className={style.block}>
        <CustomLabel htmlFor="email" label="email" />
        <Controller
          control={control}
          name="email"
          rules={{
            required: 'Email required.',
          }}
          render={({ field }) => (
            <div className={style.inputContainer}>
              <Mail className={clsx([style.icon, style.leftIcon])} />
              <CustomInput
                {...field}
                className={style.input}
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="you@example.com"
              />
            </div>
          )}
        />
      </div>
      <div className={style.block}>
        <CustomLabel htmlFor="password" label="password" />
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
                name="password"
                id="password"
                placeholder="At least 8 characters"
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
      <div className={style.block}>
        <CustomLabel htmlFor="repeatPassword" label="Repeat Password" />
        <Controller
          control={control}
          name="repeatPassword"
          rules={{
            validate: (v) => {
              if (v === '') {
                return 'Repeat password please.';
              }

              if (passwordWatch !== v) {
                return 'Repeated password incorrect.';
              }

              return true;
            },
          }}
          render={({ field }) => (
            <div className={style.inputContainer}>
              <Lock className={clsx([style.icon, style.leftIcon])} />
              <CustomInput
                {...field}
                className={style.input}
                type={hideRepPass ? 'password' : 'text'}
                name="repeatPassword"
                id="repeatPassword"
                placeholder="Repeat your password"
              />
              {hideRepPass ? (
                <Eye
                  className={clsx([style.icon, style.rightIcon, style.eye])}
                  onClick={handleToggleHideRepPass}
                />
              ) : (
                <EyeOff
                  className={clsx([style.icon, style.rightIcon, style.eye])}
                  onClick={handleToggleHideRepPass}
                />
              )}
            </div>
          )}
        />
      </div>
      <Controller
        control={control}
        name="ageConfirm"
        rules={{
          required: 'Please confirm that you are 14 years of age or older.',
        }}
        render={({ field: { ref, value, onChange } }) => (
          <div className={style.checkbox}>
            <CheckBox
              ref={ref}
              checked={value}
              onChange={() => onChange(!value)}
              readOnly={true}
            />
            <p className={style.label}>
              I confirm I am{' '}
              <strong className={style.strong}>
                14 years of age or older.
              </strong>
            </p>
          </div>
        )}
      />
      <Controller
        control={control}
        name="communityGuidelineConfirm"
        rules={{
          required: 'Please confirm that you agree to the Community Guideline.',
        }}
        render={({ field: { ref, value, onChange } }) => (
          <div className={style.checkbox}>
            <CheckBox
              classNameContainer={style.checkboxContainer}
              ref={ref}
              checked={value}
              onChange={() => onChange(!value)}
              readOnly={true}
            />
            <p className={style.label}>
              I've read and agree to Inkpact's
              <NavLink
                className={style.link}
                to={'/community-guideline'}
                target="_blank"
              >
                Community Guidelines.
              </NavLink>
            </p>
          </div>
        )}
      />
      <Controller
        control={control}
        name="privacyPolicyConfirm"
        rules={{
          required: 'Please confirm that you agree to the Privacy Policy.',
        }}
        render={({ field: { ref, value, onChange } }) => (
          <div className={style.checkbox}>
            <CheckBox
              classNameContainer={style.checkboxContainer}
              ref={ref}
              checked={value}
              onChange={() => onChange(!value)}
              readOnly={true}
            />
            <p className={style.label}>
              I've read and agree to Inkpact's
              <NavLink
                className={style.link}
                to={'/privacy-policy'}
                target="_blank"
              >
                Privacy Policy.
              </NavLink>
            </p>
          </div>
        )}
      />

      {error && <CaptionError caption={error} />}
      <CustomButton
        className={style.submit}
        type="submit"
        variant="primary"
        padding="10x20"
      >
        Create account
      </CustomButton>
    </form>
  );
}
