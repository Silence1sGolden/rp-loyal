import { ReactElement } from 'react';
import { RoleFormProps } from './types';
import style from './RoleForm.module.scss';

export function RoleForm({
  title,
  image,
  subtitle,
}: RoleFormProps): ReactElement {
  return (
    <div className={style.container}>
      <img
        className={style.avatar}
        width={45}
        height={45}
        src={image}
        alt={title}
      />
      <div className={style.textContainer}>
        <h2 className={style.title}>{title}</h2>
        {subtitle && <p className={style.subtitle}>{subtitle}</p>}
      </div>
    </div>
  );
}
