import { Meta, StoryObj } from '@storybook/react';
import { TiteledAnyProfile } from './TiteledAnyProfile';

const meta: Meta<typeof TiteledAnyProfile> = {
  title: 'UI/Containers/TiteledAnyProfile',
  argTypes: {
    imageSRC: {
      control: 'text',
      description: 'Изображение',
    },
    title: {
      control: 'text',
      description: 'Заголовок',
    },
    subtitle: {
      control: 'text',
      description: 'Необязательный подзаголовок',
    },
  },
  tags: ['autodocs'],
  component: TiteledAnyProfile,
};
export default meta;
type Story = StoryObj<typeof TiteledAnyProfile>;

export const Default: Story = {
  args: {
    imageSRC:
      'https://i.pinimg.com/736x/30/ee/65/30ee654c2ee5c34d086444c98c2a45e7.jpg',
    title: 'Привет',
    subtitle: 'я подпись)',
  },
};
