import { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'UI/Containers/Header',
  tags: ['autodocs'],
  component: Header,
  argTypes: {
    title: {
      control: 'text',
      description: 'Заголовок',
    },
    onBack: {
      description: 'Функция при возврате',
    },
    onConfirm: {
      description: 'Функция при подтверждении',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: 'Заголовок',
    onBack: () => console.log('back'),
    onConfirm: () => console.log('confirm'),
  },
};

export const Title: Story = {
  args: {
    title: 'Заголовок',
  },
};

export const Back: Story = {
  args: {
    onBack: () => console.log('back'),
  },
};

export const BackWithConfirm: Story = {
  args: {
    onBack: () => console.log('back'),
    onConfirm: () => console.log('confirm'),
  },
};

export const BackWithRoleRoom: Story = {
  args: {
    title: 'Комната',
    image:
      'https://i.pinimg.com/736x/6a/4b/e3/6a4be37db6d8864c83debaa41d6a6ab9.jpg',
    onBack: () => console.log('back'),
    onMessage: () => console.log('message'),
  },
};

export const Without: Story = {
  args: {},
};
