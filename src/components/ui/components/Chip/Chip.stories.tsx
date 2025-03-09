import { Chip } from './Chip';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Chip> = {
  title: 'UI/Components/Chip',
  tags: ['autodocs'],
  component: Chip,
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const FantasyMobile: Story = {
  args: {
    text: 'Фэнтези',
  },
};
