import { NavLink } from 'react-router';
import { RegistrationForm } from '@/features/RegistationForm/RegistationForm';
import UserPlus from '@/shared/assets/icons/UserPlus.svg?react';
import { AuthTitle } from '@/shared/components/AuthTitle/AuthTitle';
import { CustomContainer } from '@/shared/ui/CustomContainer/CustomContainer';
import { CustomSection } from '@/shared/ui/CustomSection/CustomSection';
import { Divider } from '@/shared/ui/Divider/Divider';
import style from './RegistrationWidget.module.scss';

export function RegistrationWidget() {
  return (
    <CustomSection classNameSection={style.section} variant="secondary">
      <AuthTitle
        topSlot={<UserPlus className={style.icon} />}
        title="Create your account"
        subtitle="Start writing your first story today"
      />
      <CustomContainer className={style.container}>
        <RegistrationForm />
        <Divider text="or" />
        <p className={style.signin}>
          Already have an account?{' '}
          <NavLink to="/login" className={style.link}>
            Sign in
          </NavLink>
        </p>
      </CustomContainer>
    </CustomSection>
  );
}
