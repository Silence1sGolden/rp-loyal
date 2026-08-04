import { MainWidgetHowItWork } from './MainWidgetHowItWork/MainWidgetHowItWork';
import { MainWidgetImpact } from './MainWidgetImpact/MainWidgetImpact';
import { MainWidgetJoinUs } from './MainWidgetJoinUs/MainWidgetJoinUs';
import { MainWidgetWelcome } from './MainWidgetWelcome/MainWidgetWelcome';

export function MainWidget() {
  return (
    <>
      <MainWidgetWelcome />
      <MainWidgetImpact />
      <MainWidgetHowItWork />
      <MainWidgetJoinUs />
    </>
  );
}
