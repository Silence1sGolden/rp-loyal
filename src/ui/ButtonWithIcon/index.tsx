import style from './ButtonWithIcon.module.scss';

type TButtonWithIcon = {
  Icon?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
      titleId?: string;
      desc?: string;
      descId?: string;
    }
  >;
  title: string;
  text?: string;
  color?: string;
  fill?: string;
  onClick?: () => void;
};

export function ButtonWithIcon({
  Icon,
  title,
  text,
  color,
  fill,
  onClick,
}: TButtonWithIcon) {
  return (
    <div className={style.div} onClick={onClick}>
      {Icon && (
        <>
          <Icon className={style.svg} style={{ color: color, fill: fill }} />
          <span className={style.subtitle}>{title}</span>
        </>
      )}
      {text && <p className={style.p}>{text}</p>}
    </div>
  );
}
