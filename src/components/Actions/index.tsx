import { ReactNode } from 'react';
import style from './Actions.module.scss';
import { useLocation, useNavigate } from 'react-router';
import { ButtonWithIcon } from '@/ui/ButtonWithIcon';
import { MockCurrentUser } from '@/mock/user';
import Back from '@/icons/back.svg?react';

type TActions = {
  mustBeAuth?: boolean;
  children?: ReactNode;
  back?: boolean;
};

export function Actions({ children, mustBeAuth = false, back }: TActions) {
  const navigate = useNavigate();
  const location = useLocation();
  const currentUser = MockCurrentUser;

  const onBack = () => {
    const from = location.state?.from;

    if (from) {
      navigate(from, { replace: true });
    } else {
      navigate('/search', {
        replace: true,
      });
    }
  };

  if (mustBeAuth && !currentUser) {
    return (
      <div className={style.actions}>
        <ButtonWithIcon
          title="Войти"
          text="Войти"
          onClick={() =>
            navigate('/login', { state: { from: location.pathname } })
          }
        />
      </div>
    );
  }

  return (
    <div className={style.actions}>
      {back && <ButtonWithIcon title="Назад" Icon={Back} onClick={onBack} />}
      {children}
    </div>
  );
}
