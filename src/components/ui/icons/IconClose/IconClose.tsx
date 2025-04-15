import clsx from 'clsx';
import svg from '../Icon.module.scss';
import style from './IconClose.module.scss';

export type TIconCloseProps = {
  className?: string;
  onClick?: () => void;
};

export function IconClose({ onClick, className }: TIconCloseProps) {
  return (
    <svg
      onClick={onClick}
      className={clsx([svg.svg, className, style.svg])}
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.75 26.25L26.1625 8.75M26.25 26.25L8.8375 8.75"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
