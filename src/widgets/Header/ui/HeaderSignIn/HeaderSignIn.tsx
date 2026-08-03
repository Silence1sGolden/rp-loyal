import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Moon from '@/shared/assets/icons/Moon.svg?react';
import Sun from '@/shared/assets/icons/Sun.svg?react';
import { CustomButton } from '@/shared/ui/CustomButton/CustomButton';
import style from './HeaderSignIn.module.scss';

export function HeaderSignIn() {
  const navigate = useNavigate();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleSingIn = () => {
    navigate('/login');
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <div className={style.content}>
      <CustomButton variant="empty" padding="6x6" onClick={handleToggleTheme}>
        {isDarkTheme ? (
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
