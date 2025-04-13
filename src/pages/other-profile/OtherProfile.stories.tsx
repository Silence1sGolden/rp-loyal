import { Meta, StoryObj } from '@storybook/react';
import { OtherProfile } from './OtherProfile';

const meta: Meta<typeof OtherProfile> = {
  title: 'Pages/Other-Profile',
  component: OtherProfile,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof OtherProfile>;

export const Default: Story = {
  args: {
    id: '0000000001',
  },
};
