export type TStats = {
  stories: number;
  partners: number;
  turns: number;
};

export type TAvailbleStatus = 'active' | 'inactive';
export type TAvailbleTime = 'mins' | 'hours' | 'days';

export type TProfile = {
  username: string;
  avatar: string;
  registeredAt: string;
  stats: TStats;
  styles: string[];
  about: string;
  availble: {
    status: TAvailbleStatus;
    time: TAvailbleTime;
  };
};
