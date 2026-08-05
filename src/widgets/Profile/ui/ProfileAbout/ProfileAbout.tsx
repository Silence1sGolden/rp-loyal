import { CustomContainer } from '@/shared/ui/CustomContainer/CustomContainer';
import { CustomLabel } from '@/shared/ui/CustomLabel/CustomLabel';
import { EmptyText } from '@/shared/ui/EmptyText/EmptyText';
import style from './ProfileAbout.module.scss';

type TProfileAboutProps = {
  about: string;
  onChange: (data: string) => void;
};

export function ProfileAbout({ about }: TProfileAboutProps) {
  return (
    <CustomContainer>
      <CustomLabel label="About" />
      {about.length === 0 && (
        <EmptyText text="Maybe someday I'll write about myself here..." />
      )}
      <p className={style.about}>{about}</p>
    </CustomContainer>
  );
}
