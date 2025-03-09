import { ReactElement, useEffect, useRef } from 'react';
import style from './ColoredText.module.scss';
import clsx from 'clsx';
import { ColoredTextProps } from './types';
import { getValueBetween } from '@/utils/utils';

export function ColoredText({
  className = null,
  Shell,
  text,
}: ColoredTextProps): ReactElement {
  const shellElement = useRef<HTMLHeadingElement>(null);
  const data = text.split('').map((item, index) => (
    <span className={style.letter} key={index}>
      {item}
    </span>
  ));

  useEffect(() => {
    if (shellElement.current) {
      Array.from(shellElement.current.children).forEach((item, index) => {
        setTimeout(
          () => {
            item.classList.add(style.letter_on);
          },
          index * getValueBetween(1000, 2000)
        );
      });
    }
  }, [text, Shell]);

  return (
    <Shell
      ref={shellElement}
      className={clsx([
        style.shell,
        className,
        Shell === 'h1' && style.shell_h1,
        Shell === 'h2' && style.shell_h2,
        Shell === 'h3' || Shell === 'h4' || (Shell === 'h5' && style.shell_h3),
        Shell === 'p' && style.shell_p,
      ])}
    >
      {data}
    </Shell>
  );
}
