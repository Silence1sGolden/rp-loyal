import { ReactElement, useState } from 'react';
import style from './Modal.module.scss';
import { IconClose } from '../ui/icons/IconClose/IconClose';

export type TModalProps = {
  state?: boolean;
  children?: ReactElement;
  close?: boolean;
};

export function Modal({ children, state = false, close = true }: TModalProps) {
  const [show, setShow] = useState<boolean>(state);
  return (
    show && (
      <div className={style.modal}>
        {close && (
          <IconClose className={style.close} onClick={() => setShow(false)} />
        )}
        <div className={style.container}>{children}</div>
      </div>
    )
  );
}
