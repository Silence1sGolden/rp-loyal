import Moon from '@/shared/assets/icons/Moon.svg?react';
import Sun from '@/shared/assets/icons/Sun.svg?react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { CustomButton } from '@/shared/ui/CustomButton/CustomButton';
import { CustomNavLink } from '@/shared/ui/CustomNavLink/CustomNavLink';
import style from './HeaderSignIn.module.scss';

export function HeaderSignIn() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <div className={style.content}>
      <CustomButton variant="empty" padding="6x6" onClick={toggleTheme}>
        {isDark ? (
          <Sun className={style.icon} />
        ) : (
          <Moon className={style.icon} />
        )}
      </CustomButton>
      <CustomNavLink to="/login" variant="empty">
        Sign In
      </CustomNavLink>
      <CustomNavLink to="/registration" variant="primary">
        Join free
      </CustomNavLink>
    </div>
  );
}
