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

export function timeout<T>(time: number, data: T): Promise<T> {
  return new Promise((res) => {
    setTimeout(() => {
      return res(data);
    }, time);
  });
}

export function setCookie(
  key: string,
  value: string,
  time: string | number
): void {
  document.cookie = key + '=' + value + '; expires=' + time;
}
