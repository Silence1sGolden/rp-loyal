import {
  TFormsResponse,
  TLoginData,
  TMessagesResponse,
  TProfile,
  TRegisterData,
  TResponse,
  TRolesResponse,
  TUser,
} from './types';
import { filterForms, getValueBetween, timeout } from './utils';
import { CHATS, MESSAGES, USER } from './constants';
import { TSeachParams } from '@/slices/searchSlice';

const BASE_URL = 'http://192.168.1.100:3000';

export function loginApi(user: TLoginData): Promise<TResponse<string>> {
  return fetch(BASE_URL + 'api/auth', {
    method: 'POST',
    body: JSON.stringify(user),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
}

export function getMessagesApi(clarifictions: {
  _id: string;
  count: number;
}): Promise<TResponse<TMessagesResponse>> {
  const { _id, count } = clarifictions;
  console.log({ chatID: _id, count: count });
  return timeout<TMessagesResponse>(getValueBetween(1000, 5000), {
    _id: _id,
    messages: MESSAGES,
  });
}

export function getFormsApi(
  filter: TSeachParams
): Promise<TResponse<TFormsResponse>> {
  console.log(filter);
  return timeout<TFormsResponse>(getValueBetween(1000, 5000), {
    roles: filterForms(filter),
  });
}

export function getRolesApi(): Promise<TResponse<TRolesResponse>> {
  console.log('chats: ', CHATS);
  return timeout<TRolesResponse>(getValueBetween(1000, 5000), {
    roles: CHATS,
  });
}

export function getProfileApi(
  id: string
): Promise<TResponse<{ user: TProfile }>> {
  return fetch(BASE_URL + `/api/users/${id}`).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw res.json();
    }
  });
}

export function regUserApi(user: TRegisterData): Promise<TResponse<TUser>> {
  console.log(user);
  return timeout<TUser>(getValueBetween(1000, 5000), USER);
}
