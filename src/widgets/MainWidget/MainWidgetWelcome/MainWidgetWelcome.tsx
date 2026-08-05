import Arrow from '@/shared/assets/icons/Arrow.svg?react';
import Users from '@/shared/assets/icons/Users.svg?react';
import { CustomNavLink } from '@/shared/ui/CustomNavLink/CustomNavLink';
import style from './MainWidgetWelcome.module.scss';
import { CustomSection } from '../../../shared/ui/CustomSection/CustomSection';
import { MainWidgetExample } from '../ui/MainWidgetExample/MainWidgetExample';

export function MainWidgetWelcome() {
  return (
    <CustomSection
      classNameContent={style.content}
      display="grid"
      variant="primary"
    >
      <div className={style.welcome}>
        <p className={style.chip}>
          <Users className={style.icon} />
          Text-based roleplay · 14+
        </p>
        <h1 className={style.title}>
          Stories written
          <br />
          <span className={style.titleFocus}>two lines at a time</span>
        </h1>
        <p className={style.subtitle}>
          Inkpact is a space for collaborative fiction writers. Find a story,
          match with a partner, and build something neither of you could write
          alone — message by message.
        </p>
        <div className={style.actions}>
          <CustomNavLink
            to="/stories"
            variant="primary"
            padding="10x20"
            fontSize="14"
          >
            Browse stories
          </CustomNavLink>
          <CustomNavLink
            to="/registration"
            variant="secondary"
            padding="10x20"
            fontSize="14"
          >
            Create an account
            <Arrow className={style.arrow} />
          </CustomNavLink>
        </div>
      </div>
      <MainWidgetExample />
    </CustomSection>
  );
}
