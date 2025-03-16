import { CustomChips } from '@/ui/CustomChips';
import style from './RolesCategoryList.module.scss';

type TRolesCategoryList = {
  ganres: string[];
  tags: string[];
};

export function RolesCategoryList({ ganres, tags }: TRolesCategoryList) {
  return (
    <div className={style.container}>
      <h4 className={style.title}>Теги/Жанры</h4>
      <div className={style.list}>
        {...tags.map((item, index) => (
          <CustomChips
            key={index}
            to={`/search?tags=${item}`}
            text={item}
            color="peach"
          />
        ))}
        {...ganres.map((item, index) => (
          <CustomChips
            key={index + tags.length}
            to={`/search?ganres=${item}`}
            text={item}
            color="lavander"
          />
        ))}
      </div>
    </div>
  );
}
