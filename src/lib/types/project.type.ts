import { ProjectsToUsers } from '@/lib/types/projects-to-users.type';

export type Project = {
  id: string;

  title: string;

  description: string;

  employersNeeds: {
    ProjectManagement: number;
    Backend: number;
    Frontend: number;
    MachineLearning: number;
    DevOps: number;
    QA: number;
  };

  budget: string;

  projectToUsers?: ProjectsToUsers[];

  updatedAt: Date;

  createdAt: Date;

  history: { action: string; date: Date }[];
};
