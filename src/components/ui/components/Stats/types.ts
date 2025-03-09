export type UserStats = {
  friends: number | string;
  likes: number | string;
  rewards: number | string;
};

export type StatsProps = {
  userStats: UserStats;
};
