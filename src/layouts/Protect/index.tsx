import { MockCurrentUser } from '@/mock/user';
import { Navigate, Outlet } from 'react-router';

type TProtectLayout = {
  notAuth?: boolean;
};

export default function ProtectLayout({ notAuth = false }: TProtectLayout) {
  const currentUser = MockCurrentUser;

  if (currentUser && notAuth) {
    return <Navigate to={`/${currentUser._id}`} />;
  }

  if (!currentUser) {
    return <Navigate to="login" />;
  }

  return <Outlet />;
}
