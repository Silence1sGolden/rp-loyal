import { User } from './types';
import { getValueBetween, timeout, USER } from './utils';

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

// export async function checkUserApi(): Promise<Response<null>> {
//   const request = await timeout(getValueBetween(1000, 5000), {
//     status: true,
//     data: null,
//   });
//   return request;
// }

export function getUserApi(): Promise<Response<UserResponse>> {
  return timeout(getValueBetween(1000, 5000), USER);
}

export function loginApi(user: LoginUserData): Promise<Response<UserResponse>> {
  console.log(user);
  return timeout(getValueBetween(1000, 5000), USER);
}

export function regUserApi(
  user: RegisterUserData
): Promise<Response<UserResponse>> {
  console.log(user);
  return timeout(getValueBetween(1000, 5000), USER);
}
