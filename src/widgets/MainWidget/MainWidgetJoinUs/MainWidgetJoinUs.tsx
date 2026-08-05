import ChevronLeft from '@/shared/assets/icons/ChevronLeft.svg?react';
import { CustomNavLink } from '@/shared/ui/CustomNavLink/CustomNavLink';
import style from './MainWidgetJoinUs.module.scss';
import { CustomSection } from '../../../shared/ui/CustomSection/CustomSection';

export function MainWidgetJoinUs() {
  return (
    <CustomSection
      classNameContent={style.content}
      display="flex"
      variant="secondary"
    >
      <h2 className={style.title}>Your next story is waiting</h2>
      <p className={style.subtitle}>
        Join writers who prefer craft over chaos. No dice, no stats — just words
        that matter.
      </p>
      <CustomNavLink
        to="/registration"
        padding="10x20"
        fontSize="14"
        variant="primary"
      >
        Find a story
        <ChevronLeft className={style.icon} />
      </CustomNavLink>
    </CustomSection>
  );
}
