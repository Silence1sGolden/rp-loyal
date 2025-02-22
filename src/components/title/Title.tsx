import { ReactElement, useEffect, useState } from 'react';
import style from './Title.module.scss';
import { ColorText } from '../color-text/ColorText';
import { Link } from 'react-router';

// type StageOfTitle = 'first' | 2 | 3 | 4;

export function Title(): ReactElement {
  const [stage, setStage] = useState<number>(1);

  function sider(e: WheelEvent) {
    if (stage !== 4) {
      if (e.deltaY > 0) {
        switch (stage) {
          case 1: {
            setStage(2);
            break;
          }
          case 2: {
            setStage(3);
            break;
          }
          case 3: {
            setStage(4);
            break;
          }
        }
        document.removeEventListener('wheel', sider);
      }
    }
  }

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        if (stage < 5) {
          setStage(stage + 1);
        }
      }, 500);
    } else {
      document.addEventListener('wheel', sider);
    }
  }, [stage]);

  return (
    <div className={style.title}>
      {stage >= 1 && (
        <ColorText
          className={style.text}
          shell="h2"
          text="RP - loyal это"
          time={500}
        />
      )}
      {stage >= 2 && (
        <ColorText
          className={style.text}
          shell="h2"
          text="не просто место"
          time={500}
        />
      )}
      {stage >= 3 && (
        <ColorText
          className={style.text}
          shell="h2"
          text="это сказка"
          time={500}
        />
      )}
      {stage >= 4 && (
        <ColorText
          className={style.text}
          shell="h2"
          text="Добро пожаловать!"
          time={500}
        />
      )}
      <Link to="/profile" className={style.button} type="button">
        Попробовать
      </Link>
    </div>
  );
}
