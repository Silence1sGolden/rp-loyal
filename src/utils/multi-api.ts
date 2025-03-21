import {
  mockAbout,
  mockListOfTags,
  mockRoles,
  mockStats,
} from '@/pages/my-profile/mock';
import { TMessage, TUserProfileData, TUser } from './types';
import { getValueBetween, timeout } from './utils';
import { CHATS, MESSAGES, USER } from './constants';

export type TUserResponse = {
  user: TUser;
  refreshToken: string;
  accessToken: string;
};

export type TResponse<T> = Promise<{
  status: boolean;
  data: T;
}>;

export type TLoginData = {
  email: string;
  password: string;
};

export interface IRegisterData extends TLoginData {
  name: string;
}

export function checkUserApi(): TResponse<TUserResponse> {
  console.log('checkUser');
  return timeout(getValueBetween(1000, 5000), {
    status: true,
    data: {
      user: USER,
      refreshToken: 'refreshToken',
      accessToken: 'accessToken',
    },
  });
}

export function loginApi(user: TLoginData): TResponse<TUserResponse> {
  console.log('user: ', user);
  return timeout(getValueBetween(1000, 5000), {
    status: true,
    data: {
      user: USER,
      refreshToken: 'refreshToken',
      accessToken: 'accessToken',
    },
  });
}

export type TChatResponse = {
  messages: TMessage;
};

export type TChatsResponse = {
  chats: TChat[];
};

export type TChat = {
  id: string;
  title: string;
  img: string;
  lastMessage: TMessage;
};

export function getChatApi(id: string): TResponse<TChatResponse> {
  console.log({ chatID: id, message: MESSAGES });
  return timeout(getValueBetween(1000, 5000), {
    status: true,
    data: {
      messages: MESSAGES[+id],
    },
  });
}

export function getChatsApi(): TResponse<TChatsResponse> {
  console.log('chats: ', CHATS);
  return timeout(getValueBetween(1000, 5000), {
    status: true,
    data: {
      chats: CHATS,
    },
  });
}

export function getProfileApi(): TResponse<TUserProfileData> {
  return timeout(getValueBetween(1000, 5000), {
    status: true,
    data: {
      stats: mockStats,
      likesTags: mockListOfTags,
      about: mockAbout,
      rolesForms: mockRoles,
    },
  });
}

export function regUserApi(user: IRegisterData): TResponse<TUserResponse> {
  console.log('registration: ', user);
  return timeout(getValueBetween(1000, 5000), {
    status: true,
    data: {
      user: {
        email: user.email,
        username: user.name,
        rating: 0,
        profileIMG:
          'https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg',
      },
      refreshToken: 'refreshToken',
      accessToken: 'accessToken',
    },
  });
}
