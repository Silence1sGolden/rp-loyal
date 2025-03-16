import { Stats } from '@/components/ui/components/Stats/Stats';
import { TiteledAnyProfile } from '@/components/ui/containers/TiteledAnyProfile/TiteledAnyProfile';
import { TiteledChips } from '@/components/ui/containers/TiteledChips/TiteledChips';
import { TiteledInformation } from '@/components/ui/containers/TiteledInformation/TiteledInformation';
import { TiteledRoles } from '@/components/ui/containers/TiteledRoles/TiteledRoles';
import { useDispatch, useSelector } from '@/store/store';
import { getUser } from '@/slices/userSlice';
import { getProfile, getProfileData } from '@/slices/profileSlice';
import { LoadingPage } from '@/components/loading/LoadingPage';
import { useEffect } from 'react';

type MyProfileProps = {};

export function MyProfile({}: MyProfileProps) {
  const user = useSelector(getUser);
  const profile = useSelector(getProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!profile) {
      dispatch(getProfileData());
    }
  }, []);

  if (!user || !profile) {
    return <LoadingPage shell="h1" text="Происходит загрузочка..." />;
  }

  return (
    <>
      <TiteledAnyProfile
        imageSRC={user.profileIMG}
        title={user.username}
        subtitle=""
        // TODO
        // Необхожимо добавить в user поле status
      />
      <Stats userStats={profile.stats} />
      <TiteledChips title="Любимые теги" list={profile.likesTags} />
      <TiteledInformation title="О себе" text={profile.about} />
      <TiteledRoles title="Анкеты ролок" roles={profile.rolesForms} />
    </>
  );
}
