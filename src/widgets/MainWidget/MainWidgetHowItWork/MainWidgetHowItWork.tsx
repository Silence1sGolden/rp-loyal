import { CustomSection } from '@/shared/ui/CustomSection/CustomSection';
import style from './MainWidgetHowItWork.module.scss';
import { MainWidgetActionsInfo } from '../ui/MainWidgetActionsInfo/MainWidgetActionsInfo';
import { MainWidgetExample } from '../ui/MainWidgetExample/MainWidgetExample';

export function MainWidgetHowItWork() {
  return (
    <CustomSection
      classNameSection={style.content}
      display="grid"
      variant="primary"
    >
      <MainWidgetActionsInfo />
      <MainWidgetExample />
    </CustomSection>
  );
}
