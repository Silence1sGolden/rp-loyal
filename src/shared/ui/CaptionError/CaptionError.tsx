import Alert from '@/shared/assets/icons/Alert.svg?react';
import style from './CaptionError.module.scss';

type TCaptionErrorProps = {
  caption: string;
};

export function CaptionError({ caption }: TCaptionErrorProps) {
  return (
    <div className={style.caption}>
      <Alert className={style.icon} />
      {caption}
    </div>
  );
}
