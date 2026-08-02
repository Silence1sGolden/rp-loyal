import { TProfile } from '@/models/Profile';

export const MockProfiles: TProfile[] = [
  {
    _id: '999',
    nickname: 'Mute',
    avatar:
      'https://i.pinimg.com/1200x/fe/bf/4c/febf4cbe8c1831811815e7eb18a81b4e.jpg',
    about: 'Labudabuda',
    subtitle: 'Something there, something here',
    background:
      'https://i.pinimg.com/1200x/a5/69/d7/a569d78f801a2ed9e2711d79492eef36.jpg',
    stats: {
      likes: [],
      friends: [],
      symbols: 0,
    },
    tags: ['18', 'Глубокий сюжет'],
    ganres: ['Средневековье'],
    roles: ['4123'],
  },
  {
    _id: '228',
    avatar:
      'https://i.pinimg.com/1200x/08/d5/35/08d53511e4c8261168290ce98c758ac0.jpg',
    nickname: 'Kat9',
    subtitle: 'Like a B.I.G',
    stats: {
      likes: [],
      friends: [],
      symbols: 0,
    },
    tags: ['18'],
    ganres: ['Средневековье'],
    about: 'Sometimes I dream about something very very bad',
    background:
      'https://i.pinimg.com/1200x/d5/31/63/d53163577c50fe3430ad823146056ecc.jpg',
    roles: ['1235', '5123', '9582'],
  },
  {
    _id: '1',
    nickname: 'Kaka',
    avatar:
      'https://i.pinimg.com/736x/15/2d/ca/152dca28e3265c903f03dd47d58d70e0.jpg',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas malesuada convallis. Phasellus eu lorem vestibulum, accumsan quam nec, varius urna. Morbi vel leo urna. Cras commodo nulla ut dolor consequat, nec volutpat nulla finibus. Donec interdum scelerisque felis, non porta quam aliquam ac. Pellentesque hendrerit orci non pulvinar tincidunt. Nunc imperdiet ligula vitae efficitur pretium. Suspendisse potenti. Sed purus metus, accumsan vel augue vitae, malesuada malesuada orci.',
    subtitle: 'Kalala Sambuka',
    background:
      'https://i.pinimg.com/1200x/c1/e6/af/c1e6afe04854ec507ba07351b8712a37.jpg',
    stats: {
      likes: [],
      friends: [],
      symbols: 850212334,
    },
    tags: ['12', 'Майнкрафт'],
    ganres: ['Выживание'],
    roles: [],
  },
];
