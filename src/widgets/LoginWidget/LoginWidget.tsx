import { NavLink } from 'react-router';
import { LoginForm } from '@/features/LoginForm/LoginForm';
import Pen from '@/shared/assets/icons/Pen.svg?react';
import { AuthTitle } from '@/shared/components/AuthTitle/AuthTitle';
import { CustomContainer } from '@/shared/ui/CustomContainer/CustomContainer';
import { CustomSection } from '@/shared/ui/CustomSection/CustomSection';
import { Divider } from '@/shared/ui/Divider/Divider';
import style from './LoginWidget.module.scss';

export function LoginWidget() {
  return (
    <CustomSection
      classNameSection={style.section}
      display="flex"
      variant="secondary"
    >
      <AuthTitle
        topSlot={<Pen className={style.icon} />}
        title="Welcome back"
        subtitle="Sign in to continue your stories"
      />
      <CustomContainer className={style.container}>
        <LoginForm />
        <Divider text="or" />
        <p className={style.signup}>
          New here?{' '}
          <NavLink to="/registration" className={style.link}>
            Create an account
          </NavLink>
        </p>
      </CustomContainer>
      <p className={style.privacy}>
        By signing in you agree to Inkpact's Community Guidelines
      </p>
    </CustomSection>
  );
}
