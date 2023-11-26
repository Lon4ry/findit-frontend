import styles from '@/ui/screens/dashboard/dashboard-content.module.scss';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import DashboardProject from '@/ui/screens/dashboard/dashboard-project';
import { Project } from '@/lib/types/project.type';

const DashboardProjects = async () => {
  const { data: json, isLoading } = useSWR('/api/dashboard/projects', fetcher);
  return (
    <div className={styles.dashboardProjects}>
      <h2>Мои проекты</h2>
      <ol>
        {isLoading
          ? null
          : json.length !== 0 &&
            json.data.map((project: Project) => (
              <li key={project.id}>
                <DashboardProject {...project} />
              </li>
            ))}
      </ol>
    </div>
  );
};
export default DashboardProjects;
