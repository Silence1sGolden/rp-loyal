import { TProfile } from './Profile';

export type TDiscussionMessage = {
  _id: string;
  profile: TProfile;
  message: string;
  sendAt: string;
};
