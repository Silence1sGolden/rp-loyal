import { ReactElement, useEffect } from 'react';
import { checkUser, getCheck, getUser } from '../../slices/userSlice';
import { Navigate, useLocation } from 'react-router';
import { useDispatch, useSelector } from '../../store/store';
import { LoadingPage } from '../loading/LoadingPage';

interface ProtectRouteProps {
  children: ReactElement;
  onlyOnAuth?: boolean;
}

export function ProtectRoute({
  children,
  onlyOnAuth = false,
}: ProtectRouteProps): ReactElement {
  const status = useSelector(getCheck);
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (!status) {
      dispatch(checkUser());
    }
  }, []);

  if (!status) {
    return <LoadingPage />;
  }

  if (!user && !onlyOnAuth) {
    return <Navigate replace state={{ from: location }} to="/login" />;
  }

  if (user && onlyOnAuth) {
    const from = location.state?.from || { pathname: '/' };
    return <Navigate replace to={from} />;
  }

  return children;
}
