import { TRoles } from '@/models/Roles';
import style from './RolesCard.module.scss';
import { useLocation, useNavigate } from 'react-router';
import { RolesCardChips } from './RolesCardChips';

export function RolesCard({ background, title, tags, ganres, _id }: TRoles) {
  const navigate = useNavigate();
  const location = useLocation();

  const onClick = () => {
    navigate(`/roles/${_id}`, { state: { from: location.pathname } });
  };

  return (
    <div className={style.card} onClick={onClick}>
      <div className={style.attributeList}>
        <RolesCardChips text={tags[0]} color="peach" />
        <RolesCardChips text={ganres[0]} color="lavander" />
      </div>
      <img
        className={style.img}
        width="225"
        height="120"
        src={background}
        alt={title}
      />
      <div
        className={style.effect}
        style={{
          background: `url(${background}) no-repeat center / cover`,
        }}
      />
      <span className={style.title}>{title}</span>
    </div>
  );
}
