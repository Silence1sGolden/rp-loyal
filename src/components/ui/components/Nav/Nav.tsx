import { ReactElement, useState } from 'react';
import style from './Nav.module.scss';
import { Link } from 'react-router';
import clsx from 'clsx';
import { NavigationTitle, NavProps } from './types';

export function Nav({ user }: NavProps): ReactElement {
  const [currentPage, setCurrentPage] = useState<NavigationTitle>('none');

  return (
    <div className={style.nav}>
      <Link
        className={clsx([style.link, currentPage === 'search' && style.show])}
        to="#"
        onClick={() => setCurrentPage('search')}
      >
        <svg
          className={clsx([style.svg])}
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.625 30.625L21.8017 21.8017M21.8017 21.8017C22.7496 20.8538 23.5016 19.7284 24.0146 18.4899C24.5276 17.2514 24.7917 15.9239 24.7917 14.5833C24.7917 11.8759 23.7161 9.27939 21.8017 7.36495C19.8873 5.45052 17.2908 4.375 14.5833 4.375C11.8759 4.375 9.27939 5.45052 7.36495 7.36495C5.45052 9.27939 4.375 11.8759 4.375 14.5833C4.375 15.9239 4.63905 17.2514 5.15206 18.4899C5.66508 19.7284 6.41702 20.8538 7.36495 21.8017C8.31288 22.7496 9.43824 23.5016 10.6768 24.0146C11.9153 24.5276 13.2428 24.7917 14.5833 24.7917C15.9239 24.7917 17.2514 24.5276 18.4899 24.0146C19.7284 23.5016 20.8538 22.7496 21.8017 21.8017Z"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <span className={style.subtitle}>Поиск</span>
      </Link>
      <Link
        className={clsx([
          style.link,
          currentPage === 'notification' && style.show,
        ])}
        to="#"
        onClick={() => setCurrentPage('notification')}
      >
        <svg
          className={style.svg}
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4998 7.82396V4.375M17.4998 7.82396C19.5198 7.90155 21.4303 8.76182 22.8273 10.2228C24.2244 11.6838 24.9983 13.6309 24.9855 15.6523V18.2773C24.9855 21.7569 27.7082 22.626 27.7082 24.3658C27.7082 25.2306 27.7082 26.25 26.9236 26.25H8.07609C7.2915 26.25 7.2915 25.2306 7.2915 24.3658C7.2915 22.626 10.0142 21.7569 10.0142 18.2773V15.6523C10.0014 13.6309 10.7753 11.6838 12.1723 10.2228C13.5694 8.76182 15.4799 7.90155 17.4998 7.82396ZM12.7355 26.25C12.8725 27.4925 13.1817 28.4958 14.1121 29.33C15.0431 30.1647 16.2495 30.6262 17.4998 30.6262C18.7502 30.6262 19.9565 30.1647 20.8875 29.33C21.818 28.4958 22.69 27.4925 22.8271 26.25H12.7355Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className={style.subtitle}>Уведомления</span>
      </Link>
      <Link
        className={clsx([style.link, currentPage === 'profile' && style.show])}
        to="#"
        onClick={() => setCurrentPage('profile')}
      >
        <img
          width={35}
          height={35}
          className={style.avatar}
          src={user.profileIMG}
          alt={user.username}
        />
        <span className={style.subtitle}>{user.username}</span>
      </Link>
      <Link
        className={clsx(style.link, currentPage === 'chat' && style.show)}
        to="#"
        onClick={() => setCurrentPage('chat')}
      >
        <svg
          className={style.svg}
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.2085 13.125H17.5002M21.8752 13.125H24.7918M10.2085 17.5H13.1252M17.5002 17.5H24.7918M7.29183 7.29169H27.7085C28.0953 7.29169 28.4662 7.44533 28.7397 7.71882C29.0132 7.99231 29.1668 8.36325 29.1668 8.75002V21.875C29.1668 22.2618 29.0132 22.6327 28.7397 22.9062C28.4662 23.1797 28.0953 23.3334 27.7085 23.3334H18.0602C17.6993 23.3331 17.3512 23.4666 17.0831 23.7081L12.8831 27.4881C12.7783 27.5822 12.6484 27.644 12.5093 27.6658C12.3701 27.6877 12.2276 27.6688 12.099 27.6115C11.9703 27.5541 11.8611 27.4607 11.7844 27.3425C11.7077 27.2243 11.6669 27.0865 11.6668 26.9456V24.7917C11.6668 24.4049 11.5132 24.034 11.2397 23.7605C10.9662 23.487 10.5953 23.3334 10.2085 23.3334H7.29183C6.90506 23.3334 6.53412 23.1797 6.26063 22.9062C5.98714 22.6327 5.8335 22.2618 5.8335 21.875V8.75002C5.8335 8.36325 5.98714 7.99231 6.26063 7.71882C6.53412 7.44533 6.90506 7.29169 7.29183 7.29169Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className={style.subtitle}>Сообщения</span>
      </Link>
      <Link
        className={clsx([style.link, currentPage === 'settings' && style.show])}
        to="#"
        onClick={() => setCurrentPage('settings')}
      >
        <svg
          className={style.svg}
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.625 18.9583V16.0417C30.625 15.6549 30.4714 15.284 30.1979 15.0105C29.9244 14.737 29.5534 14.5833 29.1667 14.5833H28.0627L27.0317 12.094L27.8119 11.3123C28.0853 11.0388 28.2389 10.6679 28.2389 10.2813C28.2389 9.89455 28.0853 9.52369 27.8119 9.25021L25.7498 7.18812C25.4763 6.91473 25.1054 6.76115 24.7188 6.76115C24.3321 6.76115 23.9612 6.91473 23.6877 7.18812L22.906 7.96833L20.4167 6.93729V5.83333C20.4167 5.44656 20.263 5.07563 19.9895 4.80214C19.716 4.52865 19.3451 4.375 18.9583 4.375H16.0417C15.6549 4.375 15.284 4.52865 15.0105 4.80214C14.737 5.07563 14.5833 5.44656 14.5833 5.83333V6.93729L12.094 7.96833L11.3123 7.18812C11.0388 6.91473 10.6679 6.76115 10.2813 6.76115C9.89455 6.76115 9.52369 6.91473 9.25021 7.18812L7.18812 9.25021C6.91473 9.52369 6.76115 9.89455 6.76115 10.2813C6.76115 10.6679 6.91473 11.0388 7.18812 11.3123L7.96979 12.094L6.93729 14.5833H5.83333C5.44656 14.5833 5.07563 14.737 4.80214 15.0105C4.52865 15.284 4.375 15.6549 4.375 16.0417V18.9583C4.375 19.3451 4.52865 19.716 4.80214 19.9895C5.07563 20.263 5.44656 20.4167 5.83333 20.4167H6.93729L7.96833 22.906L7.18812 23.6877C6.91473 23.9612 6.76115 24.3321 6.76115 24.7188C6.76115 25.1054 6.91473 25.4763 7.18812 25.7498L9.25021 27.8119C9.52369 28.0853 9.89455 28.2389 10.2813 28.2389C10.6679 28.2389 11.0388 28.0853 11.3123 27.8119L12.094 27.0317L14.5833 28.0627V29.1667C14.5833 29.5534 14.737 29.9244 15.0105 30.1979C15.284 30.4714 15.6549 30.625 16.0417 30.625H18.9583C19.3451 30.625 19.716 30.4714 19.9895 30.1979C20.263 29.9244 20.4167 29.5534 20.4167 29.1667V28.0627L22.906 27.0302L23.6877 27.8119C23.9612 28.0853 24.3321 28.2389 24.7188 28.2389C25.1054 28.2389 25.4763 28.0853 25.7498 27.8119L27.8119 25.7498C28.0853 25.4763 28.2389 25.1054 28.2389 24.7188C28.2389 24.3321 28.0853 23.9612 27.8119 23.6877L27.0317 22.906L28.0627 20.4167H29.1667C29.5534 20.4167 29.9244 20.263 30.1979 19.9895C30.4714 19.716 30.625 19.3451 30.625 18.9583Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 21.875C18.6603 21.875 19.7731 21.4141 20.5936 20.5936C21.4141 19.7731 21.875 18.6603 21.875 17.5C21.875 16.3397 21.4141 15.2269 20.5936 14.4064C19.7731 13.5859 18.6603 13.125 17.5 13.125C16.3397 13.125 15.2269 13.5859 14.4064 14.4064C13.5859 15.2269 13.125 16.3397 13.125 17.5C13.125 18.6603 13.5859 19.7731 14.4064 20.5936C15.2269 21.4141 16.3397 21.875 17.5 21.875Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className={style.subtitle}>Настройки</span>
      </Link>
    </div>
  );
}
