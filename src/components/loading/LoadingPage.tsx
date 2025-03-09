import { ReactElement } from 'react';
import style from './LoadingPage.module.scss';
import { ColoredText } from '../ui/components/ColoredText/ColoredText';

export function LoadingPage(): ReactElement {
  return (
    <div className={style.container}>
      <ColoredText shell="h1" text="Loading" />
    </div>
  );
}
