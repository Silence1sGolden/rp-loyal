import { Navigate, Outlet } from 'react-router';

type TProtectLayout = {
  forAuth?: boolean;
};

export default function ProtectLayout({ forAuth = true }: TProtectLayout) {
  const currentUser = true;

  if (currentUser && forAuth) {
    return <Navigate to="profile" />;
  }

  if (!currentUser && !forAuth) {
    return <Navigate to="login" />;
  }

  return <Outlet />;
}
