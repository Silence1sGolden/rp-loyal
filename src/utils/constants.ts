import { Message } from '../slices/msgSlice';
import { Chat, Response, UserResponse } from './multi-api';
import { createToken } from './utils';

export const USER: Response<UserResponse> = {
  status: true,
  data: {
    user: {
      username: 'Danil',
      email: 'my-email@mute.ru',
      profileIMG:
        'https://i.pinimg.com/736x/3f/a5/4c/3fa54c227e043ef7d869319567c7ae49.jpg',
      rating: 4.5,
    },
    accessToken: createToken(),
    refreshToken: createToken(),
  },
};

export const CHATS: Chat[] = [
  {
    id: '1',
    title: 'Puppy',
    img: 'https://i.pinimg.com/736x/85/e2/87/85e28795c2ffa20925881770b1b80f65.jpg',
  },
  {
    id: '2',
    title: 'Lesbek',
    img: 'https://i.pinimg.com/736x/c2/32/9e/c2329ea5dc953d61c9d188e390b8e3f0.jpg',
  },
  {
    id: '3',
    title: 'Max & Jacy',
    img: 'https://i.pinimg.com/736x/a4/0b/a4/a40ba43a608535dc769eb403812c5959.jpg',
  },
];

export const PUPPY_CHAT: Message[] = [
  {
    user: 'mute',
    message: 'Hello',
    sendAt: '01.01.2025',
  },
  {
    user: 'mute',
    message: 'How are you?',
    sendAt: '01.01.2025',
  },
];

export const MAX_JACY_CHAT: Message[] = [
  {
    user: 'Max',
    message: 'Hello',
    sendAt: '01.01.2025',
  },
  {
    user: 'Jacy',
    message: 'Hi',
    sendAt: '01.01.2025',
  },
];

export const LESBEK_CHAT: Message[] = [
  {
    user: 'Lesbek',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id purus leo. Maecenas mi tellus, molestie porta metus nec, egestas rhoncus mauris. Fusce malesuada tristique diam id fringilla. Fusce congue finibus viverra. Quisque hendrerit, magna a finibus iaculis, erat enim laoreet nisl, eget ultrices risus magna ac ante.',
    sendAt: '01.01.2025',
  },
  {
    user: 'Lesbel',
    message:
      'Curabitur pulvinar venenatis ex, non posuere metus lobortis vel. Cras vitae lacinia turpis, et sagittis lacus. Cras tincidunt vehicula mauris nec vestibulum. Etiam porta eleifend augue vitae vehicula. Cras iaculis varius felis, sit amet pellentesque nibh sollicitudin ac. Nunc ullamcorper justo risus, vel consectetur est tempor id. Nam eu nisi molestie lectus lobortis malesuada. Morbi ut mi egestas, ornare nunc et, pulvinar sem.',
    sendAt: '01.01.2025',
  },
];
