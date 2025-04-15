export type UserStats = {
  fans: string[];
  likes: string[];
  rewards: string[];
};

export type StatsProps = {
  userStats: UserStats;
};
