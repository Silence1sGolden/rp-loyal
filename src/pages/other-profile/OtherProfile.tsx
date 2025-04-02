import { LoadingPage } from '@/components/loading/LoadingPage';
import { Stats } from '@/components/ui/components/Stats/Stats';
import { TiteledAnyProfile } from '@/components/ui/containers/TiteledAnyProfile/TiteledAnyProfile';
import { TiteledChips } from '@/components/ui/containers/TiteledChips/TiteledChips';
import { TiteledInformation } from '@/components/ui/containers/TiteledInformation/TiteledInformation';
import { TiteledRoles } from '@/components/ui/containers/TiteledRoles/TiteledRoles';
import { PROFILE } from '@/utils/constants';
import { timeout } from '@/utils/utils';
import { useEffect, useState } from 'react';
import style from './OtherProfile.module.scss';
import { TProfile } from '@/utils/types';

interface OtherProfileProps {
  id: string;
}

export function OtherProfile({ id }: OtherProfileProps) {
  const [profile, setProfile] = useState<TProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!profile) {
      timeout(1000, PROFILE)
        .then((data) => {
          setProfile(data.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }
  }, []);

  if (error) {
    return <LoadingPage shell="h1" text={error} />;
  }

  if (loading) {
    return <LoadingPage shell="h1" text="Загрузочка..." />;
  }

  return (
    <div className={style.container}>
      <TiteledAnyProfile
        imageSRC={profile!.profileIMG}
        title={profile!.username}
        subtitle={profile!.status}
      />
      <Stats userStats={profile!.stats} />
      <TiteledChips title="Любимые теги" list={profile!.likesTags} />
      <TiteledInformation title="О себе" text={profile!.about} />
      <TiteledRoles title="Анкеты ролок" roles={profile!.rolesForms} />
    </div>
  );
}
