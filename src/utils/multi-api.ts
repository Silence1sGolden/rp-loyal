import {
  mockAbout,
  mockListOfTags,
  mockRoles,
  mockStats,
} from '@/pages/my-profile/mock';
import { Message } from '../slices/msgSlice';
import { CHATS, LESBEK_CHAT, MAX_JACY_CHAT, PUPPY_CHAT } from './constants';
import { TUserProfileData, User } from './types';
import { getValueBetween, timeout } from './utils';

export interface UserResponse {
  user: User;
  refreshToken: string;
  accessToken: string;
}

export interface Response<T> {
  status: boolean;
  data: T;
}

export interface LoginUserData {
  email: string;
  password: string;
}

export interface RegisterUserData extends LoginUserData {
  name: string;
}

export function checkUserApi(): Promise<Response<UserResponse>> {
  if (!localStorage.getItem('rployal')) {
    return Promise.reject('Время куки истекло.');
  }
  const data = localStorage.getItem('rployal')!.split(':');
  return timeout(getValueBetween(1000, 5000), {
    status: true,
    data: {
      user: {
        email: data[0],
        username: data[1],
        rating: 0,
        profileIMG:
          'https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg',
      },
      refreshToken: '123',
      accessToken: '123',
    },
  });
}

export function loginApi(user: LoginUserData): Promise<Response<UserResponse>> {
  if (!localStorage.getItem('rployal')) {
    return Promise.reject('Пользователя с такими данными не существует.');
  }

  const data = localStorage.getItem('rployal')!.split(':');

  if (user.email !== data[0]) {
    return Promise.reject('Пользователя с такой почтой не существует.');
  }

  if (user.password !== data[2]) {
    return Promise.reject('Неверный пароль.');
  }

  return timeout(getValueBetween(1000, 5000), {
    status: true,
    data: {
      user: {
        email: data[0],
        username: data[1],
        rating: 0,
        profileIMG:
          'https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg',
      },
      accessToken: Date.now().toString(),
      refreshToken: Date.now().toString(),
    },
  });
}

export interface getChatResponse {
  id: string;
  messages: Message[];
}

export interface getChatsResponse {
  chats: Chat[];
}

export interface Chat {
  id: string;
  title: string;
  img: string;
}

export function getChatApi(id: string): Promise<Response<getChatResponse>> {
  let messages: Message[];
  switch (id) {
    case '1': {
      messages = PUPPY_CHAT;
      break;
    }
    case '2': {
      messages = LESBEK_CHAT;
      break;
    }
    case '3': {
      messages = MAX_JACY_CHAT;
      break;
    }
  }
  return timeout(getValueBetween(1000, 5000), {
    status: true,
    data: {
      id: id,
      messages: messages!,
    },
  });
}

export function getChatsApi(): Promise<Response<getChatsResponse>> {
  return timeout<Response<getChatsResponse>>(getValueBetween(1000, 5000), {
    status: true,
    data: {
      chats: CHATS,
    },
  });
}

export function getProfileApi(): Promise<Response<TUserProfileData>> {
  return timeout<Response<TUserProfileData>>(getValueBetween(1000, 5000), {
    status: true,
    data: {
      stats: mockStats,
      likesTags: mockListOfTags,
      about: mockAbout,
      rolesForms: mockRoles,
    },
  });
}

export function regUserApi(
  user: RegisterUserData
): Promise<Response<UserResponse>> {
  const { email, name, password } = user;
  try {
    localStorage.setItem('rployal', `${email}:${name}:${password}`);
  } catch (err) {
    return Promise.reject(err);
  }
  return timeout(getValueBetween(1000, 5000), {
    status: true,
    data: {
      user: {
        email: email,
        username: name,
        rating: 0,
        profileIMG:
          'https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg',
      },
      accessToken: Date.now().toString(),
      refreshToken: Date.now().toString(),
    },
  });
}
