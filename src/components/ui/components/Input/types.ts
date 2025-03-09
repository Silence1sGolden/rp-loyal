import { ChangeEvent } from 'react';

export type InputProps = {
  type: 'text' | 'email' | 'password';
  value?: string;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};
