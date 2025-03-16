import { useEffect, useState } from 'react';
import style from './CharactersList.module.scss';
import { TCharacter } from '@/models/Character';
import { CharacterCard } from '@/ui/CharacterCard';
import { MockCharacters } from '@/mock/characters';
import { useNavigate, useParams } from 'react-router';
import { Actions } from '@/components/Actions';
import { ButtonWithIcon } from '@/ui/ButtonWithIcon';
import Add from '@/icons/add.svg?react';

export default function CharactersList() {
  const [characters, setCharacters] = useState<TCharacter[]>([]);
  const { userID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (userID) {
      setCharacters(MockCharacters.filter((item) => item.author === userID));
    }
  }, []);

  return (
    <>
      <Actions>
        <ButtonWithIcon
          Icon={Add}
          title="Создать нового"
          onClick={() =>
            navigate('/login', { state: { from: location.pathname } })
          }
        />
      </Actions>
      <ul className={style.list}>
        {...characters.map((item) => <CharacterCard character={item} />)}
      </ul>
    </>
  );
}
