import { Meta, StoryObj } from '@storybook/react';
import { SearchPage } from './SearchPage';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { RolesReducer } from '@/slices/rolesSlice';
import { UserReducer } from '@/slices/userSlice';

const store = configureStore({
  reducer: {
    user: UserReducer,
    roles: RolesReducer,
  },
  preloadedState: {
    user: {
      isChecked: true,
      user: {
        username: 'Danil',
        email: 'pos@ya.ru',
        profileIMG: '',
      },
      loading: false,
      error: null,
    },
    roles: {
      roles: null,
      loading: false,
      error: null,
    },
  },
});

const meta: Meta<typeof SearchPage> = {
  title: 'Pages/Search',
  tags: ['autodocs'],
  component: SearchPage,
  decorators: (Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  ),
};
export default meta;

type Story = StoryObj<typeof SearchPage>;

export const Default: Story = {
  args: {
    params: {
      length: 0,
    },
  },
};
