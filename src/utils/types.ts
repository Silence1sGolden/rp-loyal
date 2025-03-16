import { RoleFormProps } from '@/components/ui/components/RoleForm/types';
import { UserStats } from '@/components/ui/components/Stats/types';

export interface User {
  username: string;
  email: string;
  profileIMG: string;
}

export type TUserProfileData = {
  stats: UserStats;
  likesTags: string[];
  about: string;
  rolesForms: RoleFormProps[];
};

export interface IUserData {
  emailValue: string;
  emailError: string;
  passwordValue: string;
  passwordError: string;
}

export interface IRegisterData extends IUserData {
  nameValue: string;
  nameError: string;
  repeatPasswordValue: string;
  repeatPasswordError: string;
}
