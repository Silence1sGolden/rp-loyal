import { RoleForm } from '@/components/ui/components/RoleForm/RoleForm';
import { TSearchPageProps } from './types';
import { useDispatch, useSelector } from '@/store/store';
import { getRoles, getRolesData, getRolesLoading } from '@/slices/rolesSlice';
import { LoadingPage } from '@/components/loading/LoadingPage';
import { useEffect, useState } from 'react';
import style from './SearchPage.module.scss';
import { Button } from '@/components/ui/components/Button/Button';

export function SearchPage({}: TSearchPageProps) {
  const [length, setLength] = useState<number>(0);
  const roles = useSelector(getRoles);
  const loading = useSelector(getRolesLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRolesData({ length: length }));
  }, [length]);

  if (!roles) {
    return <LoadingPage shell="h2" text="В поиске..." />;
  }

  return (
    <div className={style.container}>
      {roles.map((item) => (
        <RoleForm
          title={item.title}
          subtitle={item.description}
          image={item.imageSRC}
          key={item.id}
        />
      ))}
      {loading ? (
        <LoadingPage shell="h2" text="Подгружаем..." />
      ) : (
        <Button
          onClick={() => setLength(length + 5)}
          type="button"
          text="Ещё"
        />
      )}
    </div>
  );
}
