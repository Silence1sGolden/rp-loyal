import clsx from 'clsx';
import style from './SidebarInformation.module.scss';

type TSidebarInformation = {
  fields: { title: string; value: string | number }[];
  className?: string;
};

export function SidebarInformation({ fields, className }: TSidebarInformation) {
  return (
    <ul className={clsx(style.sidebar, className)}>
      {...fields.map((item, index) => (
        <li className={style.item} key={index}>
          <h5 className={style.title}>{item.title}</h5>
          <span className={style.value}>{item.value}</span>
        </li>
      ))}
    </ul>
  );
}
