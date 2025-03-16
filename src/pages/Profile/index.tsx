import style from './ProfileUI.module.scss';
import { ProfileTitle } from '@/pages/Profile/ProfileTitle';
import { TagsList } from '@/ui/TagsList';
import { TextWithTitle } from '@/ui/TextWithTitle';
import { TiteledRoleCards } from '@/ui/TiteledRoleCards';
import { useEffect, useState } from 'react';
import { TProfile } from '@/models/Profile';
import { useParams } from 'react-router';
import { MockProfiles } from '@/mock/profiles';
import { Actions } from '@/components/Actions';
import { ButtonWithIcon } from '@/ui/ButtonWithIcon';
import Edit from '@/icons/edit.svg?react';
import Like from '@/icons/heart.svg?react';
import NotRecommend from '@/icons/not-recomend.svg?react';
import Flag from '@/icons/flag-fill.svg?react';
import Add from '@/icons/add.svg?react';
import { MockCurrentUser } from '@/mock/user';
import { SidebarInformation } from '@/ui/SidebarInformation';
import { getCuteNumber } from '@/utils/utils';
import { NotFound } from '../NotFound';

export default function PageProfile() {
  const [profile, setProfile] = useState<TProfile | null>(null);
  const { userID } = useParams();
  const currentUser = MockCurrentUser;

  if (!userID) {
    return <NotFound />;
  }

  useEffect(() => {
    // запрашиваем информацию о пользователе с таким id
    // getUserInfo(id)
    // setProfile(data)
    setProfile(null);
    const findedProfile = MockProfiles.find((item) => item._id === userID);
    if (findedProfile) {
      setProfile(findedProfile);
    }
  }, [userID]);

  if (!profile) {
    return <NotFound />;
  }

  return (
    <>
      <Actions mustBeAuth={true}>
        {profile._id === currentUser._id ? (
          <ButtonWithIcon title="Редактировать" Icon={Edit} />
        ) : (
          <>
            <ButtonWithIcon title="Понравилось" Icon={Like} />
            <ButtonWithIcon title="Добавить в друзья" Icon={Add} />
            <ButtonWithIcon title="Не рекомендовать" Icon={NotRecommend} />
            <ButtonWithIcon title="Пожаловаться" Icon={Flag} />
          </>
        )}
      </Actions>
      <ProfileTitle {...profile} />
      <div className={style.info}>
        <SidebarInformation
          fields={[
            {
              title: 'Лайки',
              value: profile.stats.likes.length,
            },
            {
              title: 'Друзья',
              value: profile.stats.friends.length,
            },
            {
              title: 'Символы',
              value: getCuteNumber(profile.stats.symbols),
            },
          ]}
        />
        <div className={style.mainInfo}>
          <TagsList {...profile} />
          <TextWithTitle title="Обо мне" text={profile.about} />
          <TiteledRoleCards rolesID={profile.roles} />
        </div>
      </div>
    </>
  );
}
