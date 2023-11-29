import styles from '../dashboard-content.module.scss';
import DashboardNotice from '@/ui/screens/dashboard/dashboard-notices/dashboard-notice';
import { MutableRefObject, Suspense, useRef } from 'react';
import DashboardNoticeSkeleton from '@/ui/screens/dashboard/dashboard-notices/dashboard-notice.skeleton';
import useDashboardInit from '@/lib/hooks/dashboard/use-dashboard-init';

const DashboardNotices = () => {
  const listRef: MutableRefObject<HTMLOListElement> =
    useRef<HTMLOListElement>(null);

  const notices = useDashboardInit(listRef, 'notices');

  return (
    <div className={styles.dashboardNotices}>
      <h2>Уведомления</h2>
      <ol ref={listRef} className={'overflow-y-scroll'} id={'projectsList'}>
        {notices.length > 0 &&
          [...notices].map((_, index) => (
            <Suspense key={index} fallback={<DashboardNoticeSkeleton />}>
              <DashboardNotice index={index} />
            </Suspense>
          ))}
      </ol>
    </div>
  );
};
export default DashboardNotices;
