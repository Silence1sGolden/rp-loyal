import { ReactElement } from 'react';
import style from './RoleChat.module.scss';
import { RoleChatProps } from './types';
import { getUser } from '@/slices/userSlice';
import { useSelector } from '@/store/store';
import { LoadingPage } from '@/components/loading/LoadingPage';

export function RoleChat({
  chatData,
  lastMessage,
}: RoleChatProps): ReactElement {
  const user = useSelector(getUser);

  return user ? (
    <div className={style.rolechat}>
      <img className={style.image} src={chatData.avatar} alt={chatData.title} />
      <div className={style.container}>
        <h2 className={style.title}>{chatData.title}</h2>
        <div className={style.textContainer}>
          <span className={style.you}>
            {lastMessage.user === user?.username
              ? 'Вы:'
              : lastMessage.user + ':'}
          </span>
          <p className={style.text}>{lastMessage.message}</p>
          {chatData.usersLastVisit[user!.username] < lastMessage.sendAt && (
            <span className={style.new}>New!</span>
          )}
        </div>
      </div>
    </div>
  ) : (
    <LoadingPage />
  );
}
