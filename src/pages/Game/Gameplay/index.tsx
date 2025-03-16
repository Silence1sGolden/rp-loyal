import { MockMessages } from '@/mock/messages';
import { TMessage } from '@/models/Message';
import { GameMessage } from '@/ui/GameMessage';

export function Gameplay() {
  const messages: TMessage[] = MockMessages; // сообщения
  // Chat - как отображение сообщений
  // Capability - действия с чатом
  return (
    <>
      <ul>
        {messages.map((message) => (
          <GameMessage message={message} />
        ))}
      </ul>
    </>
  );
}
