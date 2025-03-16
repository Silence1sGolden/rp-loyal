import style from './TiteledCharacterCards.module.scss';
import { CharacterCard } from '../CharacterCard';
import { MockCharacters } from '@/mock/characters';
import { TCharacter } from '@/models/Character';

type TTiteledCharacterCards = {
  characters: string[];
};

export function TiteledCharacterCards({ characters }: TTiteledCharacterCards) {
  const character = characters
    .map((id) => MockCharacters.find((item) => item._id === id))
    .filter((item) => item) as TCharacter[];

  return (
    <div className={style.container}>
      <h4 className={style.title}>Персонажи</h4>
      <div className={style.charactersList}>
        {character.length ? (
          <>
            {...character.map((item) => (
              <CharacterCard key={item._id} character={item} />
            ))}
          </>
        ) : (
          <span className={style.text}>Здесь пока что пусто...</span>
        )}
      </div>
    </div>
  );
}
