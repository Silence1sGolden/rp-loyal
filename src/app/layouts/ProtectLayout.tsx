import { Navigate, Outlet } from 'react-router';
import { MockCurrentUser } from '@/shared/mock/user';

type TProtectLayout = {
  forAuth?: boolean;
};

export default function ProtectLayout({ forAuth = true }: TProtectLayout) {
  const currentUser = MockCurrentUser;

  if (currentUser && forAuth) {
    return <Navigate to={`/${currentUser._id}`} />;
  }

  if (!currentUser) {
    return <Navigate to="login" />;
  }

  return <Outlet />;
}
