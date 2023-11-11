import { User } from '@/lib/types/user.type';

export type Profile = {
  id: string;
  name: { firstName: string; lastName: string };
  photo: string;
  skills: {
    ProjectManagement: number;
    Backend: number;
    Frontend: number;
    MachineLearning: number;
    DevOps: number;
    QA: number;
  };
  status: string;
  gender: 'Male' | 'Female';
  lastLogin: Date;
  profileToProjects?: {};
  user?: User;
};
