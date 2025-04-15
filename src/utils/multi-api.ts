import {
  TLoginData,
  TMessage,
  TProfile,
  TRegisterData,
  TResponse,
  TRoles,
  TRolesForm,
  TUser,
} from './types';
import { TSeachParams } from '@/slices/searchSlice';

const BASE_URL = 'http://192.168.1.100:3000';

const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export function loginApi(user: TLoginData) {
  return fetch(BASE_URL + '/api/auth', {
    method: 'POST',
    body: JSON.stringify(user),
  }).then(async (res) => {
    return await checkResponse(res);
  });
}

export function getMessagesApi(clarifictions: { _id: string; count: number }) {
  return fetch(BASE_URL + '/api/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(clarifictions),
  }).then(async (res) => {
    return await checkResponse<TResponse<TMessage[]>>(res);
  });
}

export function getFormsApi(filter: TSeachParams) {
  return fetch(BASE_URL + '/api/forms', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(filter),
  }).then(async (res) => {
    return await checkResponse<TResponse<TRolesForm[]>>(res);
  });
}

export function getRolesApi() {
  return fetch(BASE_URL + '/api/chats', {
    method: 'GET',
  }).then(async (res) => {
    return await checkResponse<TResponse<TRoles[]>>(res);
  });
}

export function getProfileApi(id: string) {
  return fetch(BASE_URL + `/api/users/${id}`).then(async (res) => {
    return await checkResponse<TResponse<TProfile>>(res);
  });
}

export function regUserApi(user: TRegisterData) {
  return fetch(BASE_URL + '/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }).then(async (res) => {
    return await checkResponse<TResponse<TUser>>(res);
  });
}
