import style from './TextWithTitle.module.scss';

type TTextWithTitle = {
  title: string;
  text: string;
};

export function TextWithTitle({ title, text }: TTextWithTitle) {
  return (
    <div className={style.container}>
      <h4 className={style.title}>{title}</h4>
      <p className={style.text}>{text}</p>
    </div>
  );
}
