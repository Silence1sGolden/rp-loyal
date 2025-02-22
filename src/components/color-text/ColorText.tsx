import { ReactElement, useEffect, useRef, useState } from 'react';
import { getValueBetween } from '../../utils/utils';
import style from './ColorText.module.scss';
import clsx from 'clsx';

interface ColorTextProps {
  shell: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  text: string;
  time: number;
  className?: string | null;
}

export function ColorText({
  className = null,
  shell,
  text,
  time,
}: ColorTextProps): ReactElement {
  const [isShaking, setIsShaking] = useState<boolean>(false);
  const shellElement = useRef<HTMLHeadingElement>(null);
  const data = text.split('').map((item, index) => (
    <span className={style.letter} key={index}>
      {item}
    </span>
  ));

  const shakingLetter = setInterval(() => {
    if (shellElement.current) {
      const spanElem: HTMLSpanElement = shellElement.current.children[
        getValueBetween(0, shellElement.current.children.length - 1)
      ] as HTMLSpanElement;
      const color =
        '#' +
        getValueBetween(100, 255).toString(16) +
        getValueBetween(100, 255).toString(16) +
        getValueBetween(100, 255).toString(16);

      spanElem.style.color = color;
      spanElem.style.textShadow = `0px 0px 15px ${color}`;
    }
  }, time);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      isShaking ? clearInterval(shakingLetter) : shakingLetter;
    } else {
      setIsShaking(true);
    }
  }, [isShaking]);

  return (
    <>
      {shell === 'h1' && (
        <h1 ref={shellElement} className={clsx(style.h1, className)}>
          {data}
        </h1>
      )}
      {shell === 'h2' && (
        <h2 ref={shellElement} className={clsx(style.h1, className)}>
          {data}
        </h2>
      )}
      {shell === 'h3' && (
        <h3 ref={shellElement} className={clsx(style.h1, className)}>
          {data}
        </h3>
      )}
      {shell === 'h4' && (
        <h4 ref={shellElement} className={clsx(style.h1, className)}>
          {data}
        </h4>
      )}
      {shell === 'h5' && (
        <h5 ref={shellElement} className={clsx(style.h1, className)}>
          {data}
        </h5>
      )}
    </>
  );
}
