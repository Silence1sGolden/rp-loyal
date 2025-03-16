export const getCookie = (key: string): string => {
  const cookieList = document.cookie.split(';').map((item) => {
    const cookie = item.split('=');
    return { key: cookie[0], value: cookie[1] };
  });
  const cookie = cookieList.find((item) => item.key === key)?.value;

  return cookie ? cookie : '';
};

export const setCookie = (
  key: string,
  value: string,
  time: string | number
): void => {
  document.cookie = key + '=' + value + '; expires=' + time;
};
