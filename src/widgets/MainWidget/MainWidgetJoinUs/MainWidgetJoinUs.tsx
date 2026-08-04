import { useNavigate } from 'react-router';
import ChevronLeft from '@/shared/assets/icons/ChevronLeft.svg?react';
import { CustomButton } from '@/shared/ui/CustomButton/CustomButton';
import style from './MainWidgetJoinUs.module.scss';
import { CustomSection } from '../../../shared/ui/CustomSection/CustomSection';

export function MainWidgetJoinUs() {
  const navigate = useNavigate();

  const handleJoinUs = () => {
    navigate('/registry');
  };

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
      <CustomButton padding="10x20" variant="primary" onClick={handleJoinUs}>
        Find a story
        <ChevronLeft className={style.icon} />
      </CustomButton>
    </CustomSection>
  );
}
