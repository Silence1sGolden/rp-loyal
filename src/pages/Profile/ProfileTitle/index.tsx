import style from './ProfileTitle.module.scss';

type TProfileTitle = {
  avatar: string;
  nickname: string;
  subtitle: string;
};

export function ProfileTitle({ avatar, nickname, subtitle }: TProfileTitle) {
  return (
    <div className={style.profileTitle}>
      <img className={style.avatar} src={avatar} alt={nickname} />
      <div className={style.rightSide}>
        <h2 className={style.nickname}>{nickname}</h2>
        <p className={style.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
}
