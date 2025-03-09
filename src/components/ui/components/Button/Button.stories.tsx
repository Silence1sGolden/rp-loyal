import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Components/Button',
  tags: ['autodocs'],
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const FantasyMobile: Story = {
  args: {
    text: 'Подтвердить',
    type: 'button',
  },
};
