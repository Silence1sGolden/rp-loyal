export type ButtonProps = {
  text: string;
  type: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
};
