import { TAvailbleStatus, TAvailbleTime } from '@/shared/models/profile';
import { CustomContainer } from '@/shared/ui/CustomContainer/CustomContainer';
import { CustomLabel } from '@/shared/ui/CustomLabel/CustomLabel';
import { clsx } from '@/shared/utils/utils';
import style from './ProfileAvailable.module.scss';

type TProfileAvailableProps = {
  status: TAvailbleStatus;
  time: TAvailbleTime;
};

export function ProfileAvailable({ status, time }: TProfileAvailableProps) {
  return (
    <CustomContainer className={style.container}>
      <CustomLabel label="Availability" />
      <p className={style.status}>
        <span className={clsx([style.dot, style[status]])}></span>
        {status === 'active' ? 'Open for story' : 'Close for story'}
      </p>
      <p className={style.time}>Replies within a few {time}</p>
    </CustomContainer>
  );
}
