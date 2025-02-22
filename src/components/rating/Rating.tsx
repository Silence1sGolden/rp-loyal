import style from './Rating.module.scss';
import { ReactElement, useEffect, useState } from 'react';

interface RatingProps {
  value: number;
}

export function Rating({ value }: RatingProps): ReactElement {
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    if (value >= 0 && value <= 10) {
      setTimeout(() => {
        if (rating <= value) {
          setRating(rating + 0.1);
        }
      }, 50);
    }
  }, [rating]);

  return (
    <>
      <div className={style.container}>
        <div className={style.rating}>
          <div
            className={style.line}
            style={{ left: 25 * rating + (Math.floor(rating) - 1) * 5 + 'px' }}
          ></div>
        </div>
        <span className={style.value}>{rating.toFixed(1)}</span>
      </div>
    </>
  );
}
