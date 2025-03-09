import { Meta, StoryObj } from '@storybook/react';
import { Stats } from './Stats';

const meta: Meta<typeof Stats> = {
  title: 'UI/Components/Stats',
  tags: ['autodocs'],
  component: Stats,
  argTypes: {
    userStats: {
      control: 'object',
      description: 'Статистика: друзья, лайки, награды',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Stats>;

export const Default: Story = {
  args: {
    userStats: {
      friends: 351,
      likes: 120,
      rewards: 14,
    },
  },
};
