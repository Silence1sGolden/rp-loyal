import { ReactElement } from 'react';
import style from './Stats.module.scss';
import { StatsProps } from './types';

export function Stats({ userStats }: StatsProps): ReactElement {
  return (
    <div className={style.stats}>
      <div className={style.elem}>
        <h3 className={style.title}>Друзья</h3>
        <p className={style.text}>{userStats.friends}</p>
      </div>
      <div className={style.elem}>
        <h3 className={style.title}>Лайки</h3>
        <p className={style.text}>{userStats.likes}</p>
      </div>
      <div className={style.elem}>
        <h3 className={style.title}>Награды</h3>
        <p className={style.text}>{userStats.rewards}</p>
      </div>
    </div>
  );
}
