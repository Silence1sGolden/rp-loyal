import { ReactElement } from 'react';
import { RegisterUI } from './RegisterUI';
import { RegisterUserData } from '../../utils/multi-api';
import { useDispatch, useSelector } from '../../store/store';
import { getError, getLoading, regUser } from '../../slices/userSlice';
import { LoadingPage } from '../../components/loading/LoadingPage';
import { ErrorAlert } from '../../components/error-alert/ErrorAlert';

export function Register(): ReactElement {
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  function onSubmit(data: RegisterUserData) {
    localStorage.setItem('email', data.email);
    dispatch(regUser(data));
  }

  return (
    <>
      {error && <ErrorAlert errorText="error" />}
      {loading ? <LoadingPage /> : <RegisterUI onSubmit={onSubmit} />}
    </>
  );
}
