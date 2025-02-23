import { ReactElement } from 'react';
import { Link } from 'react-router';
import { Chat } from '../../utils/multi-api';
import style from './ChatLogo.module.scss';

interface ChatLogoProps {
  chatData: Chat;
}

export function ChatLogo({ chatData }: ChatLogoProps): ReactElement {
  return (
    <Link className={style.link} to={chatData.id}>
      <img className={style.img} src={chatData.img} alt={chatData.title} />
      <span className={style.title}>{chatData.title}</span>
    </Link>
  );
}
