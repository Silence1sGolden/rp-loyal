import { ReactElement, useEffect } from 'react';
import { Outlet } from 'react-router';

import style from './Chat.module.scss';
import { useDispatch, useSelector } from '../../store/store';
import { getError, requestChats } from '../../slices/msgSlice';
import { ErrorAlert } from '../../components/error-alert/ErrorAlert';
import { ChatList } from '../../components/chat-list/ChatList';

export function ChatPage(): ReactElement {
  const dispatch = useDispatch();

  const error = useSelector(getError);

  useEffect(() => {
    dispatch(requestChats());
  }, []);

  return (
    <>
      {error && <ErrorAlert errorText={error} />}
      <main className={style.main}>
        <ChatList />
        <Outlet />
      </main>
    </>
  );
}
