import { useNavigate } from 'react-router';
import Pen from '@/shared/assets/icons/Pen.svg?react';
import style from './HeaderLogo.module.scss';

export function HeaderLogo() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <button className={style.logo} onClick={handleLogoClick}>
      <Pen className={style.icon} />
      <span className={style.title}>Inkpact</span>
    </button>
  );
}
