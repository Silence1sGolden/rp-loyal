import Pen from '@/shared/assets/icons/Pen.svg?react';
import style from './LoginWidgetTitle.module.scss';

export function LoginWidgetTitle() {
  return (
    <div className={style.container}>
      <Pen className={style.icon} />
      <h1 className={style.title}>Welcome back</h1>
      <p className={style.subtitle}>Sign in to continue your stories</p>
    </div>
  );
}
