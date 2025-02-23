import { ReactElement } from 'react';
import { ChatLogo } from '../../components/chat-logo/ChatLogo';
import { useSelector } from '../../store/store';
import { getChatList, getChatListLoading } from '../../slices/msgSlice';
import style from './ChatList.module.scss';

export function ChatList(): ReactElement {
  const chats = useSelector(getChatList);
  const loading = useSelector(getChatListLoading);
  return (
    <div className={style.chatlist}>
      {loading && chats ? (
        <>
          <div className={style.chat_fake}></div>
          <div className={style.chat_fake}></div>
          <div className={style.chat_fake}></div>
        </>
      ) : (
        chats.map((item, index) => <ChatLogo chatData={item} key={index} />)
      )}
    </div>
  );
}
