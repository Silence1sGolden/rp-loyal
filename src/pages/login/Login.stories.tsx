import { Meta, StoryObj } from '@storybook/react';
import { Login } from './Login';

const meta: Meta<typeof Login> = {
  title: 'Pages/Login',
  tags: ['autodocs'],
  component: Login,
};
export default meta;

type Story = StoryObj<typeof Login>;

export const Default: Story = {
  args: {},
};
