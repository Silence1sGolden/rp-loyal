import { Meta, StoryObj } from '@storybook/react';
import { Nav } from './Nav';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { UserReducer } from '../../../../slices/userSlice';

const mockStore = configureStore({
  reducer: {
    user: UserReducer,
  },
});

const meta: Meta<typeof Nav> = {
  title: 'UI/Components/Nav',
  tags: ['autodocs'],
  component: Nav,
  decorators: [
    (Story) => (
      <Provider store={mockStore}>
        <Story />
      </Provider>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Nav>;

export const Default: Story = {
  args: {
    user: {
      profileIMG:
        'https://i.pinimg.com/736x/29/e5/0e/29e50e20f3d700f0f5c1647a36c3fac1.jpg',
      username: 'Danil',
      email: 'pos@qwe',
    },
  },
};
