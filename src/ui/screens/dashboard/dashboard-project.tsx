import { Project } from '@/lib/types/project.type';
import { useRouter } from 'next/navigation';
import styles from './dashboard-content.module.scss';

const DashboardProject = (project: Project) => {
  const route = useRouter();

  return (
    <div className={styles.dashboardProject}>
      <div>
        <h1>{project.title}</h1>
        <div>
          <h6>{project.budget}</h6>
          <h6>{new Date(project.updatedAt).toLocaleDateString()}</h6>
          <h6>
            {
              project.projectToUsers.find(
                (projectToUser) => projectToUser.isOwner === true,
              ).user.username
            }
          </h6>
        </div>
      </div>
      <div>
        <button onClick={() => route.push(`/projects/${project.id}`)}>
          Перейти
        </button>
      </div>
    </div>
  );
};
export default DashboardProject;
