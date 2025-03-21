import { TMessage, TUser } from './types';
import { TChat } from './multi-api';

export const USER: TUser = {
  username: 'Danil',
  email: 'my-email@mute.ru',
  profileIMG:
    'https://i.pinimg.com/736x/3f/a5/4c/3fa54c227e043ef7d869319567c7ae49.jpg',
};

export const MESSAGES: TMessage[] = [
  {
    user: 'Lorem',
    sendAt: '01.01.2000',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    user: 'Lorem',
    sendAt: '01.01.2000',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    user: 'Lorem',
    sendAt: '01.01.2000',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    user: 'Lorem',
    sendAt: '01.01.2000',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    user: 'Lorem',
    sendAt: '01.01.2000',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    user: 'Lorem',
    sendAt: '01.01.2000',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    user: 'Lorem',
    sendAt: '01.01.2000',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    user: 'Lorem',
    sendAt: '01.01.2000',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    user: 'Lorem',
    sendAt: '01.01.2000',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    user: 'Lorem',
    sendAt: '01.01.2000',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    user: 'Lorem',
    sendAt: '01.01.2000',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];

export const CHATS: TChat[] = [
  {
    id: '0',
    title: 'Lorem',
    img: 'https://i.pinimg.com/736x/3e/b5/bd/3eb5bd4b6416cebfcd806281f87c2d2f.jpg',
    lastMessage: MESSAGES[0],
  },
  {
    id: '1',
    title: 'Lorem',
    img: 'https://i.pinimg.com/736x/3e/b5/bd/3eb5bd4b6416cebfcd806281f87c2d2f.jpg',
    lastMessage: MESSAGES[0],
  },
  {
    id: '2',
    title: 'Lorem',
    img: 'https://i.pinimg.com/736x/3e/b5/bd/3eb5bd4b6416cebfcd806281f87c2d2f.jpg',
    lastMessage: MESSAGES[0],
  },
  {
    id: '3',
    title: 'Lorem',
    img: 'https://i.pinimg.com/736x/3e/b5/bd/3eb5bd4b6416cebfcd806281f87c2d2f.jpg',
    lastMessage: MESSAGES[0],
  },
  {
    id: '4',
    title: 'Lorem',
    img: 'https://i.pinimg.com/736x/3e/b5/bd/3eb5bd4b6416cebfcd806281f87c2d2f.jpg',
    lastMessage: MESSAGES[0],
  },
  {
    id: '5',
    title: 'Lorem',
    img: 'https://i.pinimg.com/736x/3e/b5/bd/3eb5bd4b6416cebfcd806281f87c2d2f.jpg',
    lastMessage: MESSAGES[0],
  },
];
