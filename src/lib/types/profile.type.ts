import { User } from '@/lib/types/user.type';
import { Project } from 'next/dist/build/swc';

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
  profileToProjects?: {
    id: string;
    roles: string[];
    profile: Profile;
    project: Project;
  }[];
  user?: User;
};
