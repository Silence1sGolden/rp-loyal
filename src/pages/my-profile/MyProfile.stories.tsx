import { Meta, StoryObj } from '@storybook/react';
import { MyProfile } from './MyProfile';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { UserReducer } from '@/slices/userSlice';
import { ProfileReducer } from '@/slices/profileSlice';

const store = configureStore({
  reducer: {
    user: UserReducer,
    profile: ProfileReducer,
  },
  preloadedState: {
    user: {
      isChecked: true,
      user: {
        username: 'Danil',
        profileIMG:
          'https://i.pinimg.com/736x/f9/89/d6/f989d6bf533e9f9cc97e5acc8e3d9da7.jpg',
        email: 'qwe@ya',
      },
      loading: false,
      error: null,
    },
    profile: {
      profile: null,
      loading: false,
      error: null,
    },
  },
});

const meta: Meta<typeof MyProfile> = {
  title: 'Pages/My-Profile',
  component: MyProfile,
  tags: ['autodocs'],
  decorators: (Story) => {
    return (
      <Provider store={store}>
        <Story />
      </Provider>
    );
  },
};
export default meta;

type Story = StoryObj<typeof MyProfile>;

export const Default: Story = {};
