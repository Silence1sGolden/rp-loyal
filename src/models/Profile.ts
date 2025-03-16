export type TProfile = {
  _id: string;
  nickname: string;
  avatar: string;
  subtitle: string;
  about: string;
  stats: TStats;
  tags: string[];
  ganres: string[];
  roles: string[];
  background: string;
};

export type TStats = {
  likes: string[];
  friends: string[];
  symbols: number;
};
