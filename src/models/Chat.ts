import { TMessage } from './Message';
import { TRoles } from './Roles';

export type TChat = TRoles & {
  users: string[];
  messages: TMessage[];
  discussion: TMessage[];
};
