import { Meta, StoryObj } from '@storybook/react';
import { RoleForm } from './RoleForm';

const meta: Meta<typeof RoleForm> = {
  tags: ['autodocs'],
  title: 'UI/Components/RoleForm',
  component: RoleForm,
  argTypes: {
    title: {
      control: 'text',
      description: 'Заголовок',
    },
    subtitle: {
      control: 'text',
      description: 'Описание',
    },
    image: {
      control: 'text',
      description: 'Изображение',
    },
  },
};
export default meta;

type Story = StoryObj<typeof RoleForm>;

export const Default: Story = {
  args: {
    title: 'Finding Home',
    subtitle: 'Lorem impus',
    image:
      'https://i.pinimg.com/736x/80/b2/ea/80b2ea040363d16564cea1de7a799cfc.jpg',
  },
};
