import { TProfile } from '../models/profile';

export const MOCK_USER: TProfile[] = [
  {
    username: 'aelindra_vex',
    avatar:
      'https://i.pinimg.com/736x/29/96/bf/2996bfcfb8dcbb9b35d60c507d939570.jpg',
    registeredAt: '2026-08-05T13:21:19.009Z',
    stats: {
      partners: 194,
      stories: 1192,
      turns: 1234023,
    },
    styles: [
      'Hex',
      'Shrek',
      'Garfild',
      'Wold',
      'Sky',
      'Everything',
      'Puppy playtime',
    ],
    about:
      'Slow burn is my love language. I write character-driven stories — the kind where nothing explodes but everything changes. Six years of collaborative fiction, mostly romance and contemporary.',
    availble: {
      status: 'inactive',
      time: 'hours',
    },
  },
  {
    username: 'newbee',
    avatar: '',
    registeredAt: '2026-08-05T13:21:19.009Z',
    stats: {
      partners: 0,
      stories: 0,
      turns: 0,
    },
    styles: [],
    about: '',
    availble: {
      status: 'active',
      time: 'hours',
    },
  },
];
