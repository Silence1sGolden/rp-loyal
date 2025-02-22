import { ReactElement } from 'react';
import { LoginUI } from './LoginUI';
import { useDispatch, useSelector } from '../../store/store';
import { getError, getLoading, loginUser } from '../../slices/userSlice';
import { LoadingPage } from '../../components/loading/LoadingPage';
import { ErrorAlert } from '../../components/error-alert/ErrorAlert';
import { LoginUserData } from '../../utils/multi-api';

export function Login(): ReactElement {
  const loading = useSelector(getLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  const onSubmit = (data: LoginUserData) => {
    localStorage.setItem('email', data.email);
    dispatch(loginUser(data));
  };

  return (
    <>
      {error && <ErrorAlert errorText={error} />}
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <LoginUI onSubmit={onSubmit} />
        </>
      )}
    </>
  );
}
