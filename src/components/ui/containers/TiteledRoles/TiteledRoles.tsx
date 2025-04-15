import { TiteledRolesProps } from './types';
import style from './TiteledRoles.module.scss';
import { RoleForm } from '../../components/RoleForm/RoleForm';

export function TiteledRoles({ title, roles }: TiteledRolesProps) {
  return (
    <div className={style.container}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.rolesContainer}>
        {roles &&
          roles.map((item) => {
            return <RoleForm roles={item} key={item._id} />;
          })}
      </div>
    </div>
  );
}
