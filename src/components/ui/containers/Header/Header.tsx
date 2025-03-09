import { ReactElement } from 'react';
import style from './Header.module.scss';
import { HeaderProps } from './types';

export function Header({
  title,
  image,
  onMessage,
  onBack,
  onConfirm,
}: HeaderProps): ReactElement {
  return (
    <div className={style.container}>
      {onBack && (
        <svg
          className={style.svg}
          onClick={onBack}
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.2915 17.5001H27.7082M7.2915 17.5001L13.1248 11.6667M7.2915 17.5001L13.1248 23.3334"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
      {title && !image && <h2 className={style.title}>{title}</h2>}
      {title && image && (
        <div className={style.titleContainer}>
          <img
            className={style.image}
            width={45}
            height={45}
            src={image}
            alt={title}
          />
          <h2 className={style.title}>{title}</h2>
        </div>
      )}
      {onConfirm && (
        <svg
          className={style.svg}
          onClick={onConfirm}
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.2915 17.379L14.1807 24.0625L27.7082 10.9375"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
      {onMessage && (
        <svg
          className={style.svg}
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.83333 4.375C5.44656 4.375 5.07563 4.52865 4.80214 4.80214C4.52865 5.07563 4.375 5.44656 4.375 5.83333V17.5C4.375 17.8868 4.52865 18.2577 4.80214 18.5312C5.07563 18.8047 5.44656 18.9583 5.83333 18.9583H7.29167V21.875C7.29173 22.1634 7.37729 22.4453 7.53754 22.685C7.69779 22.9248 7.92552 23.1117 8.19196 23.222C8.4584 23.3324 8.75157 23.3613 9.03442 23.305C9.31727 23.2488 9.57709 23.1099 9.78104 22.906L13.7287 18.9583H21.875C22.2618 18.9583 22.6327 18.8047 22.9062 18.5312C23.1797 18.2577 23.3333 17.8868 23.3333 17.5V5.83333C23.3333 5.44656 23.1797 5.07563 22.9062 4.80214C22.6327 4.52865 22.2618 4.375 21.875 4.375H5.83333Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.7002 25.1053C11.7483 25.0615 11.7964 25.0149 11.8431 24.9682L14.9377 21.8751H21.875C23.0353 21.8751 24.1481 21.4141 24.9686 20.5937C25.7891 19.7732 26.25 18.6604 26.25 17.5001V11.6667H29.1667C29.5534 11.6667 29.9244 11.8204 30.1979 12.0939C30.4713 12.3674 30.625 12.7383 30.625 13.1251V24.7917C30.625 25.1785 30.4713 25.5495 30.1979 25.8229C29.9244 26.0964 29.5534 26.2501 29.1667 26.2501H27.7083V29.1667C27.7083 29.4551 27.6227 29.737 27.4624 29.9768C27.3022 30.2166 27.0745 30.4034 26.808 30.5138C26.5416 30.6241 26.2484 30.653 25.9656 30.5968C25.6827 30.5405 25.4229 30.4017 25.2189 30.1978L21.2712 26.2501H13.125C12.7926 26.2502 12.4701 26.1368 12.211 25.9286C11.9519 25.7204 11.7717 25.4299 11.7002 25.1053Z"
            fill="white"
          />
        </svg>
      )}
    </div>
  );
}
