import { TRoles } from '@/models/Roles';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import style from './RolesUI.module.scss';
import { MockRoles } from '@/mock/roles';
import { RolesCategoryList } from './RolesCategoryList';
import { SidebarInformation } from '@/ui/SidebarInformation';
import { TextWithTitle } from '@/ui/TextWithTitle';
import { SomethingWithTitle } from '@/ui/SomethingWithTitle';
import { TProfile } from '@/models/Profile';
import { MockProfiles } from '@/mock/profiles';
import { Actions } from '@/components/Actions';
import { MockCurrentUser } from '@/mock/user';
import { ButtonWithIcon } from '@/ui/ButtonWithIcon';
import Edit from '@/icons/edit.svg?react';
import NotRecommend from '@/icons/not-recomend.svg?react';
import Archive from '@/icons/archive.svg?react';
import Blank from '@/icons/blank.svg?react';
import { TiteledCharacterCards } from '@/ui/TiteledCharacterCards';

export default function PageRoles() {
  const [roles, setRoles] = useState<TRoles | null>(null);
  const [author, setAuthor] = useState<TProfile | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const currentUser = MockCurrentUser;
  const id = useParams().id;

  useEffect(() => {
    if (id) {
      const role = MockRoles.find((item) => item._id === id);

      if (role) {
        setRoles(role);
      }
    }
    if (roles) {
      const mockAuthor = MockProfiles.find((item) => item._id === roles.author);

      if (mockAuthor) {
        setAuthor(mockAuthor);
      }
    }
  }, [roles]);

  if (!roles || !author) {
    return <h1>Something yeah...</h1>;
  }

  return (
    <>
      <Actions mustBeAuth={true} back={true}>
        {author._id === currentUser._id ? (
          <>
            <ButtonWithIcon title="Редактировать" Icon={Edit} />
            <ButtonWithIcon title="Архив" Icon={Archive} />
          </>
        ) : (
          <>
            <ButtonWithIcon title="Анкета" Icon={Blank} />
            <ButtonWithIcon title="Не рекомендовать" Icon={NotRecommend} />
          </>
        )}
      </Actions>
      <img className={style.avatar} src={roles.avatar} alt={roles.title} />
      <h1 className={style.title}>{roles.title}</h1>
      <div className={style.info}>
        <SidebarInformation
          fields={[
            {
              title: 'Формат',
              value: roles.format,
            },
            {
              title: 'Стиль',
              value: roles.style,
            },
            {
              title: 'Темп',
              value: roles.temp,
            },
          ]}
        />
        <div className={style.mainInfo}>
          <RolesCategoryList {...roles} />
          <SomethingWithTitle title="Автор">
            <div
              className={style.author}
              onClick={() =>
                navigate(`/${author._id}`, {
                  state: { from: location.pathname },
                })
              }
            >
              <img
                className={style.authorAvatar}
                src={author.avatar}
                alt={author.nickname}
              />
              <p className={style.authorNickname}>{author.nickname}</p>
            </div>
          </SomethingWithTitle>
          <TextWithTitle text={roles.about} title="Сюжет" />
          <TiteledCharacterCards characters={roles.characters} />
        </div>
      </div>
    </>
  );
}
