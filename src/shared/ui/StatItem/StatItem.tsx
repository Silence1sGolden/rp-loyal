import { shortenNumber } from '@/shared/lib/utils/shortenNumber/shortenNumber';
import style from './StatItem.module.scss';

type TStatItemProps = {
  count: number;
  description: string;
};

export function StatItem({ count, description }: TStatItemProps) {
  return (
    <div className={style.stat}>
      <span className={style.count}>{shortenNumber(count)}</span>
      <span className={style.description}>{description}</span>
    </div>
  );
}
