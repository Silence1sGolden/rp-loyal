import { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  tags: ['autodocs'],
  component: Modal,
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    state: true,
    children: (
      <>
        <h1>Здесь какой-то текст</h1>
        <form>
          <label>
            Имя
            <input type="text" />
          </label>
          <label>
            Фамилия
            <input type="text" />
          </label>
          <button>Отправить</button>
        </form>
      </>
    ),
  },
};
