import { Meta, StoryObj } from '@storybook/react';
import { TiteledRoles } from './TiteledRoles';
import { ROLES } from '@/utils/constants';

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
    roles: ROLES,
  },
};
