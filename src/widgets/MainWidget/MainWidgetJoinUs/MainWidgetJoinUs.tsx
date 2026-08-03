import { useNavigate } from 'react-router';
import ChevronLeft from '@/shared/assets/icons/ChevronLeft.svg?react';
import { CustomButton } from '@/shared/ui/CustomButton/CustomButton';
import style from './MainWidgetJoinUs.module.scss';
import { MainWidgetSection } from '../ui/MainWidgetSection/MainWidgetSection';

export function MainWidgetJoinUs() {
  const navigate = useNavigate();

  const handleJoinUs = () => {
    navigate('/registry');
  };

  return (
    <MainWidgetSection
      className={style.content}
      display="flex"
      variant="secondary"
    >
      <h2 className={style.title}>Your next story is waiting</h2>
      <p className={style.subtitle}>
        Join writers who prefer craft over chaos. No dice, no stats — just words
        that matter.
      </p>
      <CustomButton padding="12x24" variant="primary" onClick={handleJoinUs}>
        Find a story
        <ChevronLeft className={style.icon} />
      </CustomButton>
    </MainWidgetSection>
  );
}
