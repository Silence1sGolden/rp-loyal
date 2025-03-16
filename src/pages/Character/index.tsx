import { useEffect, useState } from 'react';
import style from './Character.module.scss';
import { TCharacter } from '@/models/Character';
import { TextWithTitle } from '@/ui/TextWithTitle';
import { useParams } from 'react-router';
import { MockCharacters } from '@/mock/characters';
import { SidebarInformation } from '@/ui/SidebarInformation';
import { Actions } from '@/components/Actions';
import { ButtonWithIcon } from '@/ui/ButtonWithIcon';
import Edit from '@/icons/edit.svg?react';
import Delete from '@/icons/trash.svg?react';
import { MockCurrentUser } from '@/mock/user';

export default function PageCharacter() {
  const [character, setCharacter] = useState<TCharacter | null>(null);
  const currentUser = MockCurrentUser;
  const { charID } = useParams();

  const onDeleteCharacter = () => {
    // TODO
    // удалить персонажа
  };

  useEffect(() => {
    if (charID) {
      const mockCharacter = MockCharacters.find((item) => item._id === charID);
      if (mockCharacter) setCharacter(mockCharacter);
    }
  }, []);

  if (!character) {
    return <h1>Something wrong...</h1>;
  }

  return (
    <>
      <Actions back={true}>
        {currentUser._id === character.author && (
          <>
            <ButtonWithIcon title="Редактировать" Icon={Edit} />
            <ButtonWithIcon
              title="Удалить"
              Icon={Delete}
              onClick={onDeleteCharacter}
            />
          </>
        )}
      </Actions>
      <div className={style.info}>
        <div className={style.side}>
          <img
            className={style.avatar}
            src={character.characterIMG}
            alt={character.name}
          />
          {character.history && (
            <TextWithTitle title="Предыстория" text={character.history} />
          )}
        </div>
        <div className={style.side}>
          <SidebarInformation
            className={style.infoBoard}
            fields={[
              { title: 'Имя', value: character.name },
              { title: 'Фамилия', value: character.surname || '' },
              { title: 'Пол', value: character.sex || '' },
              { title: 'Возраст', value: character.age || '' },
            ]}
          />
          <SidebarInformation
            className={style.infoBoard}
            fields={[
              { title: 'Имя', value: character.name },
              { title: 'Фамилия', value: character.surname || '' },
              { title: 'Пол', value: character.sex || '' },
              { title: 'Возраст', value: character.age || '' },
            ]}
          />
          {character.about && (
            <TextWithTitle title="Описание" text={character.about} />
          )}
        </div>
      </div>
    </>
  );
}
