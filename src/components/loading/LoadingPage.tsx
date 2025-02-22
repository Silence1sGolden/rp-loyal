import { ReactElement } from 'react';
import { ColorText } from '../color-text/ColorText';
import style from './LoadingPage.module.scss';

export function LoadingPage(): ReactElement {
  return (
    <div className={style.container}>
      <ColorText shell="h1" text="Loading" time={1000} />
    </div>
  );
}
