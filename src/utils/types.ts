import { UserStats } from '@/components/ui/components/Stats/types';

export type TMessage = {
  _id: string;
  user: string;
  message: string;
  sendAt: string;
};

export type TRolesForm = {
  _id: string;
  title: string;
  author: string;
  tags: string[];
  ganre: string[];
  about: string;
  rolesImage: string;
};

export type TUser = {
  _id: string;
  profileIMG: string;
  username: string;
  email: string;
};

export type TAuth = {
  accessToken: string;
  refreshToken: string;
};

export type TProfile = {
  profileIMG: string;
  username: string;
  stats: UserStats;
  status: string;
  likesTags: string[];
  about: string;
  rolesForms: TRolesForm[];
};

export type TUserData = {
  emailValue: string;
  emailError: string;
  passwordValue: string;
  passwordError: string;
};

export type IRegisterData = TUserData & {
  nameValue: string;
  nameError: string;
  repeatPasswordValue: string;
  repeatPasswordError: string;
};

export type TMessagesResponse = {
  _id: string;
  messages: TMessage[];
};

export type TFormsResponse = {
  roles: TRolesForm[];
};

export type TRolesResponse = {
  roles: TRoles[];
};

export type TRoles = {
  _id: string;
  title: string;
  messages: TMessage[];
  discussion: TMessage[];
  rolesImage: string;
};

export type TUserResponse = {
  user: TUser;
  refreshToken: string;
  accessToken: string;
};

export type TResponse<T> = {
  status: boolean;
  data: T;
};

export type TUnpack<T> = {
  status: boolean;
  data: T;
};

export type TLoginData = {
  email: string;
  password: string;
};

export type TRegisterData = TLoginData & {
  name: string;
};
