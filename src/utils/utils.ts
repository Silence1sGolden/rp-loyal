import { TSeachParams } from '@/slices/searchSlice';
import { TResponse, TRolesForm } from './types';
import { ROLES } from './constants';

export const NameRegExp = new RegExp(
  '/^[\wА-Яа-я]{3,12}[^\s\+\=\-\_!@#$%^&*/,\.\'\"\`{}[\]()]$/'
);

export function getValueBetween(min: number, max: number): number {
  return Math.round(Math.random() * (max - min) + min);
}

export function createToken(): string {
  let token = '';
  while (token.length < 21) {
    token += String.fromCharCode(getValueBetween(33, 126));
  }
  return token;
}

export function timeout<T>(time: number, data: T): Promise<TResponse<T>> {
  if (Date.now() % 2 === 0) {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          status: true,
          data: data,
        });
      }, time);
    });
  }
  return Promise.reject('Произошла какая-то ошибка...');
}

export function setCookie(
  key: string,
  value: string,
  time: string | number
): void {
  document.cookie = key + '=' + value + '; expires=' + time;
}

export const filterForms = (filter: TSeachParams): TRolesForm[] => {
  let filteredForms = ROLES;

  for (let key in filter) {
    switch (key) {
      case 'tags': {
        filter.tags.forEach((item) => {
          filteredForms = ROLES.filter((role) => role.tags.includes(item));
        });
        break;
      }
      case 'ganre': {
        filter.ganre.forEach((item) => {
          filteredForms = ROLES.filter((role) => role.ganre.includes(item));
        });
        break;
      }
    }
  }

  return filteredForms;
};
