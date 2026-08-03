import { MainWidgetImpact } from './MainWidgetImpact/MainWidgetImpact';
import { MainWidgetJoinUs } from './MainWidgetJoinUs/MainWidgetJoinUs';
import { MainWidgetWelcome } from './MainWidgetWelcome/MainWidgetWelcome';
import { MainWidgetActionsInfo } from './ui/MainWidgetActionsInfo/MainWidgetActionsInfo';
import { MainWidgetExample } from './ui/MainWidgetExample/MainWidgetExample';
import { MainWidgetSection } from './ui/MainWidgetSection/MainWidgetSection';

export function MainWidget() {
  return (
    <>
      <MainWidgetWelcome />
      <MainWidgetImpact />
      <MainWidgetSection display="grid" variant="primary">
        <MainWidgetActionsInfo />
        <MainWidgetExample />
      </MainWidgetSection>
      <MainWidgetJoinUs />
    </>
  );
}
