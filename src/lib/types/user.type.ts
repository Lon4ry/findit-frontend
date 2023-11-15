import { Profile } from '@/lib/types/profile.type';

export type User = {
  id: string;
  username: string;
  email: string;
  role: string;
  linkedAccounts: {};
  updatedAt: Date;
  createdAt: Date;
  profile?: Profile;
};
