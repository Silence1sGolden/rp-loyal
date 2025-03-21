import { RoleFormProps } from '@/components/ui/components/RoleForm/types';
import { UserStats } from '@/components/ui/components/Stats/types';

export type TMessage = {
  user: string;
  message: string;
  sendAt: string;
};

export type TUser = {
  username: string;
  email: string;
  profileIMG: string;
};

export type TUserProfileData = {
  stats: UserStats;
  likesTags: string[];
  about: string;
  rolesForms: RoleFormProps[];
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
