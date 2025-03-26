import { useState } from 'react';
import style from './IconCheckBox.module.scss';
import svg from '../Icon.module.scss';
import clsx from 'clsx';

type IconCheckBoxProps = {
  color: string;
  active: boolean;
  onClick?: () => void;
};

export function IconCheckBox({ color, active, onClick }: IconCheckBoxProps) {
  const onClickSVG = () => {
    if (onClick) onClick();
  };

  return (
    <svg
      onClick={onClickSVG}
      className={clsx([svg.svg, active && style.active])}
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className={style.rect}
        x="0.5"
        y="0.5"
        width="28"
        height="28"
        rx="4.5"
        style={active ? { fill: color } : { fill: 'transparent' }}
        stroke={color}
      />
      <path
        className={style.check}
        d="M4.2915 14.379L11.1807 21.0625L24.7082 7.9375"
        stroke="black"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
