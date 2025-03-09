import { Meta, StoryObj } from '@storybook/react';
import { ColoredText } from './ColoredText';

const meta: Meta<typeof ColoredText> = {
  title: 'UI/Components/ColoredText',
  tags: ['autodocs'],
  component: ColoredText,
};
export default meta;

type Story = StoryObj<typeof ColoredText>;

export const Default: Story = {
  args: {
    text: 'Текст',
    Shell: 'p',
  },
};
