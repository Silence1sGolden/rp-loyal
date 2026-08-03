import { ReactNode } from 'react';
import Feather from '@/shared/assets/icons/Feather.svg?react';
import Lightning from '@/shared/assets/icons/Lightning.svg?react';
import Quotes from '@/shared/assets/icons/Quotes.svg?react';
import Star from '@/shared/assets/icons/Star.svg?react';
import style from './MainWidgetActionsInfo.module.scss';

type TActionInfo = {
  icon: ReactNode;
  name: string;
  description: string;
};

const ACTIONS: TActionInfo[] = [
  {
    icon: <Quotes className={style.icon} />,
    name: 'Dialogue',
    description: 'Something your character says aloud',
  },
  {
    icon: <Feather className={style.icon} />,
    name: 'Action',
    description: 'Something your character does',
  },
  {
    icon: <Star className={style.icon} />,
    name: 'Thought',
    description: 'An inner feeling or reflection',
  },
  {
    icon: <Lightning className={style.icon} />,
    name: 'Event',
    description: 'A scene change or world moment',
  },
];

export function MainWidgetActionsInfo() {
  return (
    <div className={style.description}>
      <h2 className={style.title}>Four ways to speak</h2>
      <p className={style.subtitle}>
        Every message you send is tagged with a type — giving your partner the
        context they need to respond. Good writing is knowing when to switch.
      </p>
      <div className={style.list}>
        {ACTIONS.map((i) => (
          <div key={i.name} className={style.info}>
            <div className={style.iconContainer}>{i.icon}</div>
            <span className={style.name}>{i.name}</span>
            <span className={style.description}>— {i.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
