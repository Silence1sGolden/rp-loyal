import { useSearchParams } from 'react-router';
import { Conversations } from './Conversation';
import { Gameplay } from './Gameplay';
import { Actions } from '@/components/Actions';
import { ButtonWithIcon } from '@/ui/ButtonWithIcon';
import Search from '@/icons/search.svg?react';
import Conversation from '@/icons/message.svg?react';
import Chat from '@/icons/chat.svg?react';

type TGameType = 'conv' | 'play';

export default function GamePage() {
  const [params, setParams] = useSearchParams({ type: 'conv' });
  const type = params.get('type') as TGameType;

  if (!type) {
    setParams({ type: 'conv' });
  }

  return (
    <>
      <Actions back={true}>
        <ButtonWithIcon Icon={Search} title="Поиск" />
        {type === 'conv' ? (
          <ButtonWithIcon
            Icon={Conversation}
            title="Обсуждение"
            onClick={() => setParams({ type: 'play' })}
          />
        ) : (
          <ButtonWithIcon
            Icon={Chat}
            title="Игра"
            onClick={() => setParams({ type: 'conv' })}
          />
        )}
      </Actions>
      {type === 'conv' && <Conversations />}
      {type === 'play' && <Gameplay />}
    </>
  );
}
