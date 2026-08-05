import style from './EmptyText.module.scss';

type TEmptyTextProps = {
  text: string;
};

export function EmptyText({ text }: TEmptyTextProps) {
  return <p className={style.empty}>{text}</p>;
}
