import { MockPresets } from '@/mock/presets';
import { TMessage } from '@/models/Message';
import style from './GameMessage.module.scss';

type TGameMessage = {
  message: TMessage;
};

export function GameMessage({ message }: TGameMessage) {
  const preset = MockPresets.find((item) => item.userID === message.userID);

  if (!preset) {
    return <h3>Loading...</h3>;
  }

  return (
    <div
      className={style.message}
      style={{
        backgroundImage: `url(${preset.background})`,
        border: preset.border,
        color: preset.color,
      }}
    >
      <p>{message.message}</p>
    </div>
  );
}
