import { clsx } from '@/shared/utils/utils';
import style from './CaptionText.module.scss';

type TCaptionTextProps = {
  caption: string;
  className?: string;
};

export function CaptionText({ caption, className }: TCaptionTextProps) {
  return <p className={clsx([style.caption, className])}>{caption}</p>;
}
