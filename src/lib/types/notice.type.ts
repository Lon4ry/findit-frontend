import { User } from '@/lib/types/user.type';

export type Notice = {
  id: string;
  type: string;
  message: string;
  createdAt: Date;
  removedAt: Date;
  user?: User;
};
