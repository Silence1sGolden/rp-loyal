import { ReactElement, useState } from 'react';
import style from './Tag.module.scss';
import { TagProps } from './types';
import { IconCheckBox } from '../../icons/IconCheckBox/IconCheckBox';

export function Tag({ title, checked }: TagProps): ReactElement {
  const [check, setCheck] = useState<boolean>(checked || false);

  const onClick = () => {
    setCheck(!check);
  };

  return (
    <div className={style.div} onClick={onClick}>
      <h2 className={style.h2}>{title}</h2>
      <IconCheckBox active={check} color="white" />
    </div>
  );
}
