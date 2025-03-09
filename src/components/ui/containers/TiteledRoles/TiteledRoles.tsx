import { ReactElement } from 'react';
import { TiteledRolesProps } from './types';
import style from './TiteledRoles.module.scss';
import { RoleForm } from '../../components/RoleForm/RoleForm';

export function TiteledRoles({
  title,
  roles,
}: TiteledRolesProps): ReactElement {
  return (
    <div className={style.container}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.rolesContainer}>
        {roles.map((item, index) => {
          return (
            <RoleForm
              title={item.title}
              image={item.image}
              subtitle={item.subtitle}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
