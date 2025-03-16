import { Outlet } from 'react-router';
import style from './Protect.module.scss';

export function MainLayout() {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <Outlet />
      </div>
    </main>
  );
}
