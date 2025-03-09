import { Meta, StoryObj } from '@storybook/react';
import { TiteledChips } from './TiteledChips';

const meta: Meta<typeof TiteledChips> = {
  title: 'UI/Containers/TiteledChips',
  tags: ['autodocs'],
  component: TiteledChips,
};

export default meta;
type Story = StoryObj<typeof TiteledChips>;
const list = [
  'Приключения',
  'Фэнтези',
  'ЛитРПГ',
  'Юмор',
  'Детектив',
  'Поэзия',
  'Ужасы',
  'Мистика',
];

export const FantasyMobile: Story = {
  args: {
    title: 'Жанры',
    list: list,
  },
};
