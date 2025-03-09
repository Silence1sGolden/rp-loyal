import { ReactElement } from 'react';
import { ColorText } from '../../components/ui/components/ColoredText/ColoredText';

export function NotFound(): ReactElement {
  return (
    <main>
      <ColorText text="ERROR 404 NOT FOUND" shell="h1" time={200} />
    </main>
  );
}
