import { ReactElement } from 'react';
import style from './Profile.module.scss';
import { ColorText } from '../../components/ui/components/ColoredText/ColoredText';
import { User } from '../../utils/types';
import { Input } from '../../components/input/Input';

interface ProfileUIProps {
  user: User;
}

export function ProfileUI({ user }: ProfileUIProps): ReactElement {
  return (
    <main className={style.container}>
      <img className={style.img} src={user.profileIMG} alt={user.username} />
      <ColorText
        className={style.h1}
        text={user.username}
        shell="h1"
        time={1000}
      />
      <div className={style.info}>
        <label className={style.label} htmlFor="email">
          Почта
        </label>
        <Input
          type="email"
          autoValue={user.email}
          placeholder={user.email}
          name="email"
          id="email"
        />
        <label className={style.label} htmlFor="password">
          Пароль
        </label>
        <Input
          type="password"
          name="password"
          id="password"
          autoValue="********"
        />
      </div>
    </main>
  );
}
