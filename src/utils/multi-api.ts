import { TSeachParams } from '@/slices/searchSlice';
import {
  TLoginData,
  TMessage,
  TProfile,
  TRegisterData,
  TResponse,
  TRoles,
  TSendCodeData,
  TUserResponse,
} from './types';
import { BASE_URL, REFRESH_TOKEN, setFilterToString } from './utils';

const checkResponse = <T>(res: Response): Promise<TResponse<T>> => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

const checkStatus = <T>(data: TResponse<T>): Promise<T> => {
  if (data.status) {
    return Promise.resolve(data.data);
  } else {
    return Promise.reject(data);
  }
};

const fetchWithToken = <T>(path: string, options?: RequestInit): Promise<T> => {
  return fetch(path, options)
    .then(checkResponse<T>)
    .then(checkStatus<T>)
    .catch((err) => {
      if (err.error && err.error === 'Токен не действителен.') {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        if (refreshToken) {
          return fetchWithToken<T>(path, options);
        }
        return Promise.reject(err);
      }

      return Promise.reject(err);
    });
};

export const loginApi = (user: TLoginData): Promise<string> => {
  return fetch(BASE_URL + '/api/v1/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then(checkResponse<string>)
    .then(checkStatus<string>);
};

export const sendCodeApi = (data: TSendCodeData): Promise<TUserResponse> => {
  return fetch(BASE_URL + '/api/v1/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(checkResponse<TUserResponse>)
    .then(checkStatus<TUserResponse>);
};

export const getMessagesApi = (clarifictions: {
  _id: string;
  count: number;
}): Promise<TMessage[]> => {
  return fetchWithToken<TMessage[]>(BASE_URL + '/api/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(clarifictions),
<<<<<<< HEAD
  }).then(async (res) => {
    return await checkResponse<TResponse<TMessage[]>>(res);
=======
>>>>>>> a6e1cb1 (рефакторинг кода и конечная (наверное) настройка api)
  });
};

// TODO
// Переписать под анкеты персонажей
// export function getFormsApi(filter: TSeachParams): Promise<TRolesForm[]> {
//   return fetch(BASE_URL + '/api/forms', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(filter),
//   }).then(checkResponse<TRolesForm[]>);
// }

export const getRolesApi = (filter: TSeachParams): Promise<TRoles[]> => {
  return fetchWithToken<TRoles[]>(
    BASE_URL + '/api/v1/roles' + setFilterToString(filter)
  );
};

export const getOtherProfileApi = (id: string): Promise<TProfile> => {
  return fetchWithToken<TProfile>(BASE_URL + `/api/v/users/${id}`);
};

export const regUserApi = (user: TRegisterData): Promise<string> => {
  return fetch(BASE_URL + '/api/v1/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then(checkResponse<string>)
    .then(checkStatus<string>);
};

export const regUserCodeApi = (code: TSendCodeData): Promise<TUserResponse> => {
  return fetch(BASE_URL + '/api/v1/register/code', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(code),
  })
    .then(checkResponse<TUserResponse>)
    .then(checkStatus<TUserResponse>);
};

export const getProfileApi = (): Promise<TProfile> => {
  return fetchWithToken<TProfile>(BASE_URL + '/api/v/profile');
};
