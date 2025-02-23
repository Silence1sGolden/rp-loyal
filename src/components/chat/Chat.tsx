import { ReactElement, useEffect } from 'react';
import style from './Chat.module.scss';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from '../../store/store';
import {
  getChatByID,
  getChatLoading,
  requestChat,
} from '../../slices/msgSlice';

export function Chat(): ReactElement {
  const dispatch = useDispatch();
  const location = useParams();
  const chatID = location.id!;
  const chatData = useSelector((state) => getChatByID(state, chatID));
  const loading = useSelector(getChatLoading);

  useEffect(() => {
    if (chatData === undefined && !loading) {
      dispatch(requestChat(chatID));
    }
  }, [chatData]);

  return (
    <div className={style.chat}>
      {chatData && !loading ? (
        chatData.map((item) => (
          <div className={style.container}>
            <span className={style.user}>{item.user}</span>
            <p className={style.msg}>{item.message}</p>
            <span className={style.time}>
              {new Date(item.sendAt).toString()}
            </span>
          </div>
        ))
      ) : (
        <div className={style.container_fake}>
          <span className={style.user_fake}></span>
          <p className={style.msg_fake}></p>
          <span className={style.time_fake}></span>
        </div>
      )}
    </div>
  );
}
