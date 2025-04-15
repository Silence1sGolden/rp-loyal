import { Stats } from '@/components/ui/components/Stats/Stats';
import { TiteledAnyProfile } from '@/components/ui/containers/TiteledAnyProfile/TiteledAnyProfile';
import { TiteledChips } from '@/components/ui/containers/TiteledChips/TiteledChips';
import { TiteledInformation } from '@/components/ui/containers/TiteledInformation/TiteledInformation';
import { TiteledRoles } from '@/components/ui/containers/TiteledRoles/TiteledRoles';
import { useDispatch, useSelector } from '@/store/store';
import { getUser } from '@/slices/userSlice';
import {
  getProfile,
  getProfileError,
  getProfileLoading,
  reqProfile,
} from '@/slices/profileSlice';
import { LoadingPage } from '@/components/loading/LoadingPage';
import style from './MyProfile.module.scss';
import { useEffect } from 'react';

type MyProfileProps = {};

export function MyProfile({}: MyProfileProps) {
  const user = useSelector(getUser);
  const profile = useSelector(getProfile);
  const profileLoading = useSelector(getProfileLoading);
  const profileError = useSelector(getProfileError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!profile) {
      dispatch(reqProfile(user!._id));
    }
  }, []);
  console.log(profileError);

  if (profileError) {
    return <LoadingPage shell="h1" text={profileError} />;
  }

  if (!profile || profileLoading) {
    return <LoadingPage shell="h1" text="Происходит загрузочка..." />;
  }

  return (
    <div className={style.container}>
      <TiteledAnyProfile
        imageSRC={user!.profileIMG}
        title={user!.username}
        subtitle={profile.status}
      />
      <Stats userStats={profile.stats} />
      <TiteledChips title="Любимые теги" list={profile.likesTags} />
      <TiteledInformation title="О себе" text={profile.about} />
      <TiteledRoles title="Анкеты ролок" roles={profile.rolesForms} />
    </div>
  );
}
