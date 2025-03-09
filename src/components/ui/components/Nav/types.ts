import { User } from '../../../../utils/types';

export type NavigationTitle =
  | 'none'
  | 'chat'
  | 'profile'
  | 'search'
  | 'settings'
  | 'notification';

export type NavProps = {
  user: User;
};
