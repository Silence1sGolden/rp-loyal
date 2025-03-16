import { Actions } from '@/components/Actions';
import { ButtonWithIcon } from '@/ui/ButtonWithIcon';
import { SearchRoleCards } from './SearchRoleCards';
import { MockRoles } from '@/mock/roles';
import Search from '@/icons/search.svg?react';

export default function PageSearch() {
  return (
    <>
      <Actions>
        <ButtonWithIcon title="Назад" Icon={Search} />
      </Actions>
      <SearchRoleCards roles={MockRoles} />
    </>
  );
}
