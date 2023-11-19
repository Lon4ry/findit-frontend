import { Profile } from '@/lib/types/profile.type';

export type User = Record<string, any> & {
  id: string;
  username: string;
  email: string;
  role: string;
  linkedAccounts: { github: string };
  updatedAt: Date;
  createdAt: Date;
  profile?: Profile;
};
