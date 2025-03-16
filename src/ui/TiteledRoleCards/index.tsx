import style from './TiteledRoleCards.module.scss';
import { RolesCard } from '../RolesCard';
import { useEffect, useState } from 'react';
import { TRoles } from '@/models/Roles';
import { MockRoles } from '@/mock/roles';

type TiteledRoleCards = {
  rolesID: string[];
};

export function TiteledRoleCards({ rolesID }: TiteledRoleCards) {
  const [roles, setRoles] = useState<TRoles[]>([]);

  useEffect(() => {
    setRoles(MockRoles.filter((item) => rolesID.includes(item._id)));
  }, []);

  return (
    <div className={style.container}>
      <h4 className={style.title}>Активные ролки</h4>
      <div className={style.rolesList}>
        {roles.length ? (
          <>{...roles.map((item) => <RolesCard key={item._id} {...item} />)}</>
        ) : (
          <span className={style.text}>Здесь пока что пусто...</span>
        )}
      </div>
    </div>
  );
}
