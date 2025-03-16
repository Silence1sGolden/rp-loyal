import { TCharacter } from '@/models/Character';
import style from './CharacterCard.module.scss';
import { useLocation, useNavigate } from 'react-router';

type TCharacterCard = {
  character: TCharacter;
};

export function CharacterCard({ character }: TCharacterCard) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className={style.card}
      onClick={() =>
        navigate(location.pathname + '/' + character._id, {
          state: { from: location.pathname + location.search },
        })
      }
    >
      <img
        className={style.img}
        src={character.characterIMG}
        alt={character.name}
      />
      <div className={style.info}>
        <div className={style.topInfo}>
          <span className={style.text}>{character.name}</span>
          <span className={style.text}>{character.surname}</span>
        </div>
        <div className={style.bottomInfo}>
          <span className={style.text}>{character.age}</span>
          <span className={style.slicer}></span>
          <span className={style.text}>{character.sex}</span>
          <span className={style.slicer}></span>
          <span className={style.text}>{character.about}</span>
        </div>
      </div>
    </div>
  );
}
