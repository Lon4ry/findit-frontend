import { Project } from '@/lib/types/project.type';
import { User } from '@/lib/types/user.type';

export type ProjectsToUsers = {
  id: string;

  isOwner: boolean;

  status: 'userInvited' | 'userRequested' | 'userJoined';

  permissions: string[];

  user?: User;

  project?: Project;
};
