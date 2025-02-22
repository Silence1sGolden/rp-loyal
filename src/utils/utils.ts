import { Response, UserResponse } from './multi-api';

export const NameRegExp = new RegExp(
  '/^[\wА-Яа-я]{3,12}[^\s\+\=\-\_!@#$%^&*/,\.\'\"\`{}[\]()]$/'
);

export const USER: Response<UserResponse> = {
  status: true,
  data: {
    user: {
      username: 'Danil',
      email: 'my-email@mute.ru',
      profileIMG:
        'https://i.pinimg.com/736x/3f/a5/4c/3fa54c227e043ef7d869319567c7ae49.jpg',
      rating: 4.5,
    },
    accessToken: createToken(),
    refreshToken: createToken(),
  },
};

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

export function timeout<T>(time: number, data: T): Promise<T> {
  return new Promise((res) => {
    setTimeout(() => {
      return res(data);
    }, time);
  });
}
