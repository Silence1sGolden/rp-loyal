import { Message } from '@/entities/chat/ui/Message/Message';
import { CustomContainer } from '@/shared/ui/CustomContainer/CustomContainer';

export function MainWidgetExample() {
  return (
    <CustomContainer>
      <Message
        type="event"
        text="The bookshop is quiet when you arrive. A bell sounds, settles."
      />
      <Message
        type="action"
        text="She runs her finger along a shelf of spines, not reading titles."
      />
      <Message
        type="dialogue"
        text="You had a box of letters in the window last week."
      />
      <Message
        type="thought"
        text="He doesn't ask how she knew whose they were."
        me={true}
      />
    </CustomContainer>
  );
}
