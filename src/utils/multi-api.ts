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
import { CHATS, MESSAGES, PROFILE, USER } from './constants';
import { TSeachParams } from '@/slices/searchSlice';

export function checkUserApi(): Promise<TResponse<null>> {
  return timeout<null>(getValueBetween(1000, 5000), null);
}

export function loginApi(user: TLoginData): Promise<TResponse<TUser>> {
  return timeout<TUser>(getValueBetween(1000, 5000), USER);
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

/**
 * Запрос на сервер для получения профиля пользователя
 * @param id Иднтификатор профиля, который надо получить
 * @returns TProfile обьект
 */
export function getProfileApi(id: string): Promise<TResponse<TProfile>> {
  return timeout<TProfile>(getValueBetween(1000, 5000), PROFILE);
}

/**
 * Запрос на сервер для регистрации пользователя в системе
 * @param user Данные пользователя для регистрации
 * @returns TUser обьект
 */
export function regUserApi(user: TRegisterData): Promise<TResponse<TUser>> {
  return timeout<TUser>(getValueBetween(1000, 5000), USER);
}
