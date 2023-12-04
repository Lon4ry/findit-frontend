import { useRouter } from 'next/navigation';
import styles from '../dashboard-content.module.scss';
import useDashboard from '@/lib/hooks-contexts/dashboard/use-dashboard.hook';
import { ProjectType } from '@/lib/types/project.type';

const DashboardProject = ({ index }: { index: number }) => {
  const route = useRouter();

  const project: ProjectType = useDashboard('projects', index);

  return (
    project && (
      <li key={project.id}>
        <div className={styles.project}>
          <div>
            <h1>{project.title}</h1>
            <div>
              <h6>{project.budget}</h6>
              <h6>{new Date(project.updatedAt).toLocaleDateString()}</h6>
              <h6>
                {
                  project.projectToUsers.find((value) => value.isOwner === true)
                    .user.username
                }
              </h6>
            </div>
          </div>
          <div>
            <button
              onClick={() => route.push(`/projects/${project && project.id}`)}
            >
              Перейти
            </button>
          </div>
        </div>
      </li>
    )
  );
};
export default DashboardProject;
