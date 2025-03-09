import { Meta, StoryObj } from '@storybook/react';
import { RoleChat } from './RoleChat';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { UserReducer, UserState } from '../../../../slices/userSlice';

const mockStore = (preload: UserState) =>
  configureStore({
    reducer: {
      user: UserReducer,
    },
    preloadedState: {
      user: preload,
    },
  });

const mockYourLastMessage: UserState = {
  isChecked: true,
  user: {
    username: 'Данил',
    email: '123@asd',
    profileIMG: 'qwe',
  },
  loading: false,
  error: null,
};

const mockOtherLastMessage: UserState = {
  isChecked: true,
  user: {
    username: 'Данил',
    email: '123@asd',
    profileIMG: 'qwe',
  },
  loading: false,
  error: null,
};

const meta: Meta<typeof RoleChat> = {
  title: 'UI/Components/RoleChat',
  tags: ['autodocs'],
  argTypes: {
    chatData: {
      control: 'object',
      description: 'Данные ролки: изображение, название',
    },
    lastMessage: {
      control: 'object',
      description: 'Последнее сообщение в этом чате',
    },
  },
  component: RoleChat,
  decorators: [
    (Story) => (
      <Provider store={mockStore(mockYourLastMessage)}>
        <Story />
      </Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RoleChat>;

export const YourLastMessage: Story = {
  tags: ['autodocs'],
  args: {
    chatData: {
      avatar:
        'https://i.pinimg.com/736x/1e/b8/f5/1eb8f512dbe71200cb009876d0c4e80f.jpg',
      usersLastVisit: {
        Данил: '1741473134824',
      },
      title: 'CatRolePlay',
    },
    lastMessage: {
      user: 'Данил',
      message: 'Привет! Как твои дела? Давно не общались',
      sendAt: '1741472991159',
    },
  },
  decorators: [
    (Story) => (
      <Provider store={mockStore(mockYourLastMessage)}>
        <Story />
      </Provider>
    ),
  ],
};

export const OtherLastMessage: Story = {
  tags: ['autodocs'],
  args: {
    chatData: {
      avatar:
        'https://i.pinimg.com/736x/1e/b8/f5/1eb8f512dbe71200cb009876d0c4e80f.jpg',
      usersLastVisit: {
        Данил: '1741472991159',
      },
      title: 'CatRolePlay',
    },
    lastMessage: {
      user: 'Other',
      message:
        'In laoreet mi ex, sed facilisis sapien blandit id. Pellentesque laoreet elementum libero, vel consequat ipsum blandit et. Cras suscipit egestas fringilla.',
      sendAt: '1741473586174',
    },
  },
  decorators: [
    (Story) => (
      <Provider store={mockStore(mockOtherLastMessage)}>
        <Story />
      </Provider>
    ),
  ],
};
