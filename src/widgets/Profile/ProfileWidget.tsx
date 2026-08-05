import { MOCK_USER } from '@/shared/mock/user';
import { CustomSection } from '@/shared/ui/CustomSection/CustomSection';
import style from './ProfileWidget.module.scss';
import { ProfileAbout } from './ui/ProfileAbout/ProfileAbout';
import { ProfileAvailable } from './ui/ProfileAvailable/ProfileAvailable';
import { ProfileBase } from './ui/ProfileBase/ProfileBase';
import { ProfileStories } from './ui/ProfileStories/ProfileStories';
import { ProfileStyle } from './ui/ProfileStyle/ProfileStyle';

export function ProfileWidget() {
  const user = MOCK_USER[0];

  return (
    <CustomSection
      classNameSection={style.section}
      classNameContent={style.content}
      variant="secondary"
      display="grid"
    >
      <div className={style.block}>
        <ProfileBase {...user} />
        <ProfileStyle styles={[]} />
        <ProfileAvailable {...user.availble} />
      </div>
      <div className={style.block}>
        <ProfileAbout about={user.about} onChange={() => {}} />
        <ProfileStories />
      </div>
    </CustomSection>
  );
}
