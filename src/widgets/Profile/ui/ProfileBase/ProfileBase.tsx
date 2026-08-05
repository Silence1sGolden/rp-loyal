import { TStats } from '@/shared/models/profile';
import { CustomContainer } from '@/shared/ui/CustomContainer/CustomContainer';
import { StatItem } from '@/shared/ui/StatItem/StatItem';
import style from './ProfileBase.module.scss';

type TProfileBaseProps = {
  avatar: string;
  username: string;
  registeredAt: string;
  stats: TStats;
};

export function ProfileBase({
  avatar,
  username,
  registeredAt,
  stats,
}: TProfileBaseProps) {
  const regAt = new Date(registeredAt);

  return (
    <CustomContainer className={style.container}>
      <img className={style.avatar} src={avatar} alt={`${username} avatar`} />
      <h1 className={style.username}>{username}</h1>
      <p className={style.member}>Member since {regAt.getFullYear()}</p>
      <div className={style.stats}>
        <StatItem count={stats.partners} description="Partners" />
        <StatItem count={stats.stories} description="Stories" />
        <StatItem count={stats.turns} description="Turns" />
      </div>
    </CustomContainer>
  );
}
