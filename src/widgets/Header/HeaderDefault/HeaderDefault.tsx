import style from './HeaderDefault.module.scss';
import { HeaderLogo } from '../ui/HeaderLogo/HeaderLogo';
import { HeaderNav } from '../ui/HeaderNav/HeaderNav';
import { HeaderSignIn } from '../ui/HeaderSignIn/HeaderSignIn';

export function HeaderDefault() {
  return (
    <div className={style.content}>
      <HeaderLogo />
      <HeaderNav />
      <HeaderSignIn />
    </div>
  );
}
