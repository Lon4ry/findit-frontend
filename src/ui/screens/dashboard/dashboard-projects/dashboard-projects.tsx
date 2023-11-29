import styles from '@/ui/screens/dashboard/dashboard-content.module.scss';
import { MutableRefObject, Suspense, useRef, useState } from 'react';
import DashboardProjectSkeleton from '@/ui/screens/dashboard/dashboard-projects/dashboard-project.skeleton';
import DashboardProject from '@/ui/screens/dashboard/dashboard-projects/dashboard-project';
import useDashboardLength from '@/lib/hooks/dashboard/use-dashboard-length.hook';
import useDashboardScroll from '@/lib/hooks/dashboard/use-dashboard-scroll.hook';

const DashboardProjects = () => {
  const listRef: MutableRefObject<HTMLOListElement> =
    useRef<HTMLOListElement>(null);
  const [projects, setProjects] = useState([]);

  const length = useDashboardLength({
    type: 'projects',
    setFunction: setProjects,
    listRef,
  });
  useDashboardScroll({
    mountedLength: projects.length,
    setFunction: setProjects,
    listRef,
    length,
  });

  return (
    <div className={styles.dashboardProjects} id={'Projects'}>
      <h2>Мои проекты</h2>
      <ol ref={listRef} className={'overflow-y-scroll'} id={'projectsList'}>
        {length > 0 &&
          [...projects].map((_, index) => (
            <Suspense key={index} fallback={<DashboardProjectSkeleton />}>
              <DashboardProject index={index} />
            </Suspense>
          ))}
      </ol>
    </div>
  );
};
export default DashboardProjects;
