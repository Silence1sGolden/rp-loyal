import { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'UI/Components/Tag',
  tags: ['autodocs'],
  component: Tag,
  argTypes: {
    title: {
      control: 'text',
      description: 'Название тега',
    },
    checked: {
      control: 'boolean',
      description: 'Предустановка чекбокса',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const FantasyMobile: Story = {
  args: {
    title: 'Приключения',
  },
};
