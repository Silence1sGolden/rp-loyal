import style from './NotFound.module.scss';

export function NotFound() {
  return (
    <div className={style.container}>
      <h2 className={style.title}>
        Ошибка 404 - <br />
        Страница не найдена
      </h2>
    </div>
  );
}
