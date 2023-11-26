import styles from '@/ui/screens/dashboard/dashboard-content.module.scss';
import fetcher from '@/lib/fetcher';
import DashboardProject from '@/ui/screens/dashboard/dashboard-project';
import { Project } from '@/lib/types/project.type';
import DashboardProjectSkeleton from './skeletons/dashboard-project.skeleton';
import DashboardError from '@/ui/screens/dashboard/dashboard-error';
import useSWR from 'swr';

const DashboardProjects = async () => {
  // const { data, isLoading, size, setSize } = useSWRInfinite(
  //   (index) => `/api/dashboard/projects?skip=${index}&take=${10}`,
  //   fetcher,
  //   {
  //     parallel: true,
  //   },
  // );
  //
  // const projects: Project[] =
  //   data && data[0].data ? [].concat(...data[0].data) : [];
  // const length: number = data && data[0].length;

  const { data: projects, isLoading } = useSWR(
    '/api/dashboard/projects',
    fetcher,
  );

  const error = !isLoading && projects.error ? projects.error : null;

  return (
    <div className={styles.dashboardProjects} id={'Projects'}>
      <h2>Мои проекты</h2>
      {isLoading ? (
        <ol className={'overflow-y-hidden'}>
          <DashboardProjectSkeleton />
        </ol>
      ) : error ? (
        <DashboardError />
      ) : projects.length !== 0 ? (
        // <InfiniteScroll
        //   dataLength={length}
        //   next={() => console.log(10)}
        //   hasMore={size < length}
        //   loader={<></>}
        //   style={{ height: '100%' }}
        // >
        <ol className={'overflow-y-scroll'}>
          {projects.map((project: Project) => (
            <li key={project.id}>
              <DashboardProject {...project} />
            </li>
          ))}
        </ol>
      ) : (
        // </InfiniteScroll>
        <></>
      )}
    </div>
  );
};
export default DashboardProjects;
