import { ReactElement } from 'react';
import style from './RoleForm.module.scss';
import { TRolesForm } from '@/utils/types';

export function RoleForm({
  title,
  rolesImage,
  about,
}: TRolesForm): ReactElement {
  return (
    <div className={style.container}>
      <img
        className={style.avatar}
        width={45}
        height={45}
        src={rolesImage}
        alt={title}
      />
      <div className={style.textContainer}>
        <h2 className={style.title}>{title}</h2>
        {about && <p className={style.subtitle}>{about}</p>}
      </div>
    </div>
  );
}
