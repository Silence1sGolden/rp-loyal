import { RoleFormProps } from '@/components/ui/components/RoleForm/types';
import { UserStats } from '@/components/ui/components/Stats/types';

export const mockStats: UserStats = {
  friends: 43,
  likes: 2534,
  rewards: 4,
};
export const mockListOfTags = ['Приключения', '18+', 'Хоррор'];
export const mockAbout = 'Привет! Я люблю печенье';
export const mockRoles: RoleFormProps[] = [
  {
    title: 'The Princess and The Goblin',
    image:
      'https://i.pinimg.com/736x/bc/49/99/bc49992092b1bb9bb0fd95870d0fc3d7.jpg',
    subtitle: 'Люблю печенье!',
  },
];
