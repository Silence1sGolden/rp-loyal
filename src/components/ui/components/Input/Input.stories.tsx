import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'UI/Components/Input',
  tags: ['autodocs'],
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Email',
    onChange: (e) => {
      e.preventDefault();
      console.log('change');
    },
    className: 'qwer',
  },
};
