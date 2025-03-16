import { ReactElement } from 'react';
import style from './LoadingPage.module.scss';
import { ColoredText } from '../ui/components/ColoredText/ColoredText';

type LoadingPageProps = {
  shell: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
  text: string;
};

export function LoadingPage({ shell, text }: LoadingPageProps): ReactElement {
  return (
    <div className={style.container}>
      <ColoredText Shell={shell} text={text} />
    </div>
  );
}
