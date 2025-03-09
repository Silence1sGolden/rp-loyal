import { Meta, StoryObj } from '@storybook/react';
import { TiteledInformation } from './TiteledInformation';

const meta: Meta<typeof TiteledInformation> = {
  title: 'UI/Containers/TiteledInformation',
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Заголовок',
    },
    text: {
      control: 'text',
      description: 'Текст',
    },
  },
  component: TiteledInformation,
};
export default meta;
type Story = StoryObj<typeof TiteledInformation>;

export const Default: Story = {
  args: {
    title: 'Заголовок',
    text: 'Какой-то текст',
  },
};
