import { Meta, StoryObj } from '@storybook/react';
import { ActionsList } from './ActionsList';
import { IconLike } from '../../icons/IconLike/IconLike';
import { IconCheckBox } from '../../icons/IconCheckBox/IconCheckBox';
import SomeIcon from '@/assets/svg/bell-fill.svg?react';

const meta: Meta<typeof ActionsList> = {
  title: 'UI/containers/ActionsList',
  component: ActionsList,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ActionsList>;

export const Default: Story = {
  args: {
    children: (
      <>
        <SomeIcon />
        <IconCheckBox active={true} color="white" />
        <IconLike color="red" />
      </>
    ),
  },
};
