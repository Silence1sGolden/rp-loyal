import { ReactNode } from 'react';
import DoubleMessages from '@/shared/assets/icons/DoubleMessages.svg?react';
import Feather from '@/shared/assets/icons/Feather.svg?react';
import Search from '@/shared/assets/icons/Search.svg?react';
import { clsx } from '@/shared/utils/utils';
import style from './MainWidgetImpact.module.scss';
import { MainWidgetImpactItem } from '../ui/MainWidgetImpactItem/MainWidgetImpactItem';
import { MainWidgetSection } from '../ui/MainWidgetSection/MainWidgetSection';

type TImpactItem = {
  icon: ReactNode;
  title: string;
  subtitle: string;
};

const IMPACTS: TImpactItem[] = [
  {
    icon: <Search className={clsx([style.icon, style.primary])} />,
    title: 'Find a story',
    subtitle:
      'Browse story pitches posted by other writers. Filter by genre, tone, and format preference.',
  },
  {
    icon: <Feather className={clsx([style.icon, style.accent])} />,
    title: 'Apply to play',
    subtitle:
      "Send an application note to the story's creator. They read it and decide if you're a fit.",
  },
  {
    icon: <DoubleMessages className={clsx([style.icon, style.primary])} />,
    title: 'Write together',
    subtitle:
      'Once matched, a private thread opens. Take turns building the story — action by action, line by line.',
  },
];

export function MainWidgetImpact() {
  return (
    <MainWidgetSection display="flex" variant="secondary">
      <h2 className={style.title}>How Inkpact works</h2>
      <ul className={style.list}>
        {IMPACTS.map((item, index) => (
          <MainWidgetImpactItem key={item.title} number={index + 1} {...item} />
        ))}
      </ul>
    </MainWidgetSection>
  );
}
