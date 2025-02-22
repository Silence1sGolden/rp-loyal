import { ReactElement, useEffect, useState } from 'react';
import style from './ErrorAlert.module.scss';

interface ErrorAlertProps {
  errorText: string;
}

export function ErrorAlert({ errorText }: ErrorAlertProps): ReactElement {
  const [show, setShow] = useState<boolean>(true);

  const closeErrorMessage = () => setShow(false);

  useEffect(() => {
    setTimeout(() => {
      closeErrorMessage();
    }, 3500);
  }, []);

  return (
    <>
      {show && (
        <div className={style.container}>
          <p className={style.text}>{errorText}</p>
        </div>
      )}
    </>
  );
}
