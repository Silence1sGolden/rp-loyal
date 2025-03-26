import { Meta, StoryObj } from '@storybook/react';
import { IconLike } from './IconLike';

const meta: Meta<typeof IconLike> = {
  title: 'UI/Icons/Like',
  tags: ['autodocs'],
  component: IconLike,
};
export default meta;
type Story = StoryObj<typeof IconLike>;

export const Def: Story = {
  args: {
    color: 'red',
    onClick: () => {
      console.log('check');
    },
  },
};

export const Many: Story = {
  args: {
    color: 'green',
    onClick: () => {
      console.log('check');
    },
  },
  decorators: (Story) => {
    return (
      <>
        <Story />
        <Story />
        <Story />
      </>
    );
  },
};
