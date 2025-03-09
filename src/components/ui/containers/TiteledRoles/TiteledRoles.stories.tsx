import { Meta, StoryObj } from '@storybook/react';
import { TiteledRoles } from './TiteledRoles';
import { RoleFormProps } from '../../components/RoleForm/types';

const mockRolesForm: RoleFormProps[] = [
  {
    title: 'Finding Home',
    subtitle: 'Lorem impus',
    image:
      'https://i.pinimg.com/736x/80/b2/ea/80b2ea040363d16564cea1de7a799cfc.jpg',
  },
  {
    title: 'Witcher Secret',
    subtitle: '',
    image:
      'https://i.pinimg.com/736x/14/e1/59/14e15927e9cea0ccb572dd8df6711cc4.jpg',
  },
  {
    title: 'Mimon',
    image:
      'https://i.pinimg.com/736x/b4/b9/d7/b4b9d7ff0eeab3e34cfe792aced8f424.jpg',
  },
];

const mockCharactersForm: RoleFormProps[] = [
  {
    title: 'Anna Forester',
    subtitle: 'Lorem impus',
    image:
      'https://i.pinimg.com/736x/1c/96/84/1c96843c566e929a6dd82cc27432e6c3.jpg',
  },
  {
    title: 'Alex Pentorson',
    subtitle: '',
    image:
      'https://i.pinimg.com/736x/f0/b2/74/f0b274b273b3357077584e1534197083.jpg',
  },
];

const meta: Meta<typeof TiteledRoles> = {
  title: 'UI/Containers/TiteledRoles',
  tags: ['autodocs'],
  component: TiteledRoles,
  argTypes: {
    title: {
      control: 'text',
      description: 'Заголовок',
    },
    roles: {
      control: 'object',
      description: 'Массив форм',
    },
  },
};
export default meta;
type Story = StoryObj<typeof TiteledRoles>;

export const Default: Story = {
  args: {
    title: 'Ролки',
    roles: mockRolesForm,
  },
};

export const RolesForm: Story = {
  args: {
    title: 'Ролки',
    roles: mockRolesForm,
  },
};

export const CharactersForm: Story = {
  args: {
    title: 'Анкеты',
    roles: mockCharactersForm,
  },
};
