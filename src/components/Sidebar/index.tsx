import { Link } from 'react-router';
import style from './Sidebar.module.scss';
import Cog from '@/icons/cog.svg?react';
import Bell from '@/icons/bell.svg?react';
import Roles from '@/icons/roles.svg?react';
import Characters from '@/icons/character.svg?react';
import { SidebarElement } from './SidebarElement';
import { MockCurrentUser } from '@/mock/user';

export function Sidebar() {
  const user = MockCurrentUser;

  return (
    <div className={style.sidebar}>
      <Link className={style.link} to={`/${user._id}`}>
        <img
          className={style.logo}
          src={MockCurrentUser.avatar}
          alt={MockCurrentUser.nickname}
        />
      </Link>
      <SidebarElement to="/alerts" Icon={Bell} title="Уведомления" />
      <span className={style.stick} />
      <SidebarElement to="/search" Icon={Roles} title="Ролки" />
      <SidebarElement
        to={`/${user._id}/characters`}
        Icon={Characters}
        title="Мои Персонажи"
      />
      <span className={style.stick} />
      <div className={style.rolesList}></div>
      <span className={style.stick} />
      <SidebarElement to="/settings" Icon={Cog} title="Настройки" />
    </div>
  );
}
