import { Meta, StoryObj } from '@storybook/react';
import { IconCheckBox } from './IconCheckBox';

const meta: Meta<typeof IconCheckBox> = {
  title: 'UI/Icons/CheckBox',
  tags: ['autodocs'],
  component: IconCheckBox,
};
export default meta;
type Story = StoryObj<typeof IconCheckBox>;

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
