import { TMessage, TProfile, TRoles, TRolesForm, TUser } from './types';

export const USER: TUser = {
  username: 'Danil',
  email: 'my-email@mute.ru',
  profileIMG:
    'https://i.pinimg.com/736x/3f/a5/4c/3fa54c227e043ef7d869319567c7ae49.jpg',
};

export const MESSAGES: TMessage[] = [
  {
    _id: '0',
    user: 'Lorem',
    sendAt: '01.01.2000',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    _id: '1',
    user: 'Lorem',
    sendAt: '01.01.2000',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    _id: '2',
    user: 'Lorem',
    sendAt: '01.01.2000',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    _id: '3',
    user: 'Lorem',
    sendAt: '01.01.2000',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    _id: '4',
    user: 'Lorem',
    sendAt: '01.01.2000',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    _id: '5',
    user: 'Lorem',
    sendAt: '01.01.2000',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    _id: '5',
    user: 'Lorem',
    sendAt: '01.01.2000',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    _id: '6',
    user: 'Lorem',
    sendAt: '01.01.2000',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    _id: '7',
    user: 'Lorem',
    sendAt: '01.01.2000',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    _id: '8',
    user: 'Lorem',
    sendAt: '01.01.2000',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    _id: '9',
    user: 'Lorem',
    sendAt: '01.01.2000',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];

export const CHATS: TRoles[] = [
  {
    _id: '0',
    title: 'Lorem',
    rolesImage:
      'https://i.pinimg.com/736x/3e/b5/bd/3eb5bd4b6416cebfcd806281f87c2d2f.jpg',
    messages: MESSAGES,
    discussion: MESSAGES,
  },
  {
    _id: '1',
    title: 'Lorem',
    rolesImage:
      'https://i.pinimg.com/736x/3e/b5/bd/3eb5bd4b6416cebfcd806281f87c2d2f.jpg',
    messages: MESSAGES,
    discussion: MESSAGES,
  },
  {
    _id: '2',
    title: 'Lorem',
    rolesImage:
      'https://i.pinimg.com/736x/3e/b5/bd/3eb5bd4b6416cebfcd806281f87c2d2f.jpg',
    messages: MESSAGES,
    discussion: MESSAGES,
  },
  {
    _id: '3',
    title: 'Lorem',
    rolesImage:
      'https://i.pinimg.com/736x/3e/b5/bd/3eb5bd4b6416cebfcd806281f87c2d2f.jpg',
    messages: MESSAGES,
    discussion: MESSAGES,
  },
  {
    _id: '4',
    title: 'Lorem',
    rolesImage:
      'https://i.pinimg.com/736x/3e/b5/bd/3eb5bd4b6416cebfcd806281f87c2d2f.jpg',
    messages: MESSAGES,
    discussion: MESSAGES,
  },
  {
    _id: '5',
    title: 'Lorem',
    rolesImage:
      'https://i.pinimg.com/736x/3e/b5/bd/3eb5bd4b6416cebfcd806281f87c2d2f.jpg',
    messages: MESSAGES,
    discussion: MESSAGES,
  },
];

export const PROFILE: TProfile = {
  stats: {
    likes: 5,
    rewards: 4,
    friends: 12,
  },
  about: 'Lorem Impus pante facere',
  likesTags: ['Повседневность', 'Романтика'],
  rolesForms: [],
};

export const ROLES: TRolesForm[] = [
  {
    _id: '0',
    title: 'ArteZans: The Forgotten Magic',
    author: 'L.D. Lapinski',
    rolesImage:
      'https://i.pinimg.com/736x/07/01/47/0701474fc1612fd382e23354babd904b.jpg',
    tags: ['Брат и Сестра'],
    ganre: ['Приключение', 'Фантастика', 'Ужасы'],
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    _id: '1',
    title: 'La Senda De Los Druidas',
    author: 'Fer Jimenez',
    rolesImage:
      'https://i.pinimg.com/736x/00/f9/f2/00f9f253ee3ae0e82903d6e95b0ef0d8.jpg',
    tags: ['Лавкрафт'],
    ganre: ['Приключение', 'Тёмное Фэнтези', 'Фэнтези'],
    about:
      'Sed enim sapien, pulvinar scelerisque ultricies ut, laoreet ac lacus.',
  },
  {
    _id: '2',
    title: 'Брюм: Маленькая Ведьма',
    author: 'Жером Пелиссие',
    rolesImage:
      'https://i.pinimg.com/736x/89/6f/8f/896f8fa157ad603940e9dad458d459fb.jpg',
    tags: ['Магия'],
    ganre: ['Повседневность', 'Школа'],
    about: 'Duis maximus bibendum arcu, non varius tellus euismod sed.',
  },
  {
    _id: '3',
    title: '',
    author: '',
    rolesImage: '',
    tags: ['Брат и Сестра'],
    ganre: ['Приключение', 'Фантастика', 'Ужасы'],
    about: '',
  },
];
