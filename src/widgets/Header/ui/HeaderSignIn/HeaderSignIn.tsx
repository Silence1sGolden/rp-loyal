import { useNavigate } from 'react-router';
import Moon from '@/shared/assets/icons/Moon.svg?react';
import Sun from '@/shared/assets/icons/Sun.svg?react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { CustomButton } from '@/shared/ui/CustomButton/CustomButton';
import style from './HeaderSignIn.module.scss';

export function HeaderSignIn() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const isDark = theme === 'dark';

  const handleSingIn = () => {
    navigate('/login');
  };

  return (
    <div className={style.content}>
      <CustomButton variant="empty" padding="6x6" onClick={toggleTheme}>
        {isDark ? (
          <Sun className={style.icon} />
        ) : (
          <Moon className={style.icon} />
        )}
      </CustomButton>
      <CustomButton variant="primary" padding="6x16" onClick={handleSingIn}>
        Sign In
      </CustomButton>
    </div>
  );
}
