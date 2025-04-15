import { ColoredText } from '@/components/ui/components/ColoredText/ColoredText';
import { ReactElement } from 'react';

export function NotFound(): ReactElement {
  return (
    <main>
      <ColoredText Shell="h1" text="ERROR 404 NOT FOUND" />
    </main>
  );
}
