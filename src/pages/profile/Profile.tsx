import { ReactElement } from 'react';
import { useSelector } from '../../store/store';
import { getUser } from '../../slices/userSlice';
import { ProfileUI } from './ProfileUI';
import { LoadingPage } from '../../components/loading/LoadingPage';

export function Profile(): ReactElement {
  const user = useSelector(getUser);
  return user ? <ProfileUI user={user} /> : <LoadingPage />;
}
