import { TRoles } from '@/models/Roles';
import style from './SearchRoleCards.module.scss';
import { RolesCard } from '@/ui/RolesCard';

type TSearchRoleCards = {
  roles: TRoles[];
};

export function SearchRoleCards({ roles }: TSearchRoleCards) {
  return (
    <div className={style.rolesList}>
      {...roles.map((item) => <RolesCard key={item._id} {...item} />)}
    </div>
  );
}
