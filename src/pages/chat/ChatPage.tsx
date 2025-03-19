import { ReactElement, useEffect } from 'react';
import { Outlet } from 'react-router';

import style from './Chat.module.scss';
import { useDispatch } from '../../store/store';
import { requestChats } from '../../slices/msgSlice';

export function ChatPage(): ReactElement {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestChats());
  }, []);

  return (
    <>
      <main className={style.main}>
        <Outlet />
      </main>
    </>
  );
}
