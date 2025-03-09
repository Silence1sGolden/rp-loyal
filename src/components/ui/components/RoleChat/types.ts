import { Message } from '../../../../slices/msgSlice';

export type RoleChatInformation = {
  avatar: string;
  title: string;
  usersLastVisit: Record<string, string>;
};

export type RoleChatProps = {
  chatData: RoleChatInformation;
  lastMessage: Message;
};
