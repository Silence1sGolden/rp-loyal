import { ReactElement, useState } from 'react';
import style from './Tag.module.scss';
import clsx from 'clsx';
import { TagProps } from './types';

export function Tag({ title, checked }: TagProps): ReactElement {
  const [check, setCheck] = useState<boolean>(checked || false);

  const onClick = () => {
    setCheck(!check);
  };

  return (
    <div className={style.div} onClick={onClick}>
      <h2 className={style.h2}>{title}</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
      >
        <rect
          className={clsx([style.rect, check && style.rect_active])}
          x="3.5"
          y="3.5"
          width="28"
          height="28"
          rx="4.5"
          stroke="white"
        />
        <path
          className={clsx([style.path, check && style.path_active])}
          d="M7.2915 17.379L14.1807 24.0625L27.7082 10.9375"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
