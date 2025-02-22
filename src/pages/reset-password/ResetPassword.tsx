import { ReactElement } from 'react';
import { ResetPasswordUI } from './ResetPasswordUI';
import { useSelector } from '../../store/store';
import { getError, getLoading } from '../../slices/userSlice';
import { LoadingPage } from '../../components/loading/LoadingPage';
import { ErrorAlert } from '../../components/error-alert/ErrorAlert';

export function ResetPassword(): ReactElement {
  // const dispatch = useDispatch();
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  function onSubmit(data: { email: string }) {
    localStorage.setItem('email', data.email);
    // dispatch(regUser(data));
    // TODO - Прописать логику
  }

  return (
    <>
      {error && <ErrorAlert errorText="error" />}
      {loading ? <LoadingPage /> : <ResetPasswordUI onSubmit={onSubmit} />}
    </>
  );
}
