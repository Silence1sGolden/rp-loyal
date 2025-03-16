import { TMessage } from '@/models/Message';
import { TRoles } from '@/models/Roles';

export type TResetPasswordData = {
  email: string;
};

export type TLoginData = TResetPasswordData & {
  password: string;
};

export type TRegisterData = TLoginData & {
  name: string;
};

export type TSendCodeData = {
  code: number | string;
};

export type TResponse<T> = {
  status: boolean;
  data: T;
};

export type TCheckResponse = {
  server: boolean;
  session: boolean;
};

export type TAuthResponse = {
  refreshToken: string;
  accessToken: string;
};

export type TMessagesResponse = {
  _id: string;
  messages: TMessage[];
};

export type TFormsResponse = {
  roles: TRoles[];
};

export type TRolesResponse = {
  roles: TRoles[];
};
