import { CustomChips } from '../CustomChips';
import style from './TagsList.module.scss';

type TTagsList = {
  tags: string[];
  ganres: string[];
};

export function TagsList({ tags, ganres }: TTagsList) {
  return (
    <div className={style.container}>
      <h4 className={style.title}>Любимые теги</h4>
      <div className={style.tagsList}>
        {...tags.map((item, index) => (
          <CustomChips
            to={`/search?tags=${item}`}
            text={item}
            color="peach"
            key={index}
          />
        ))}
        {...ganres.map((item, index) => (
          <CustomChips
            to={`/search?ganres=${item}`}
            text={item}
            color="lavander"
            key={index + tags.length}
          />
        ))}
      </div>
    </div>
  );
}
