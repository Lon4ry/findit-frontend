import styles from '../dashboard-content.module.scss';
import DashboardNotice from '@/ui/screens/dashboard/dashboard-notices/dashboard-notice';
import { MutableRefObject, Suspense, useRef, useState } from 'react';
import DashboardNoticeSkeleton from '@/ui/screens/dashboard/dashboard-notices/dashboard-notice.skeleton';
import useDashboardLength from '@/lib/hooks/dashboard/use-dashboard-length.hook';
import useDashboardScroll from '@/lib/hooks/dashboard/use-dashboard-scroll.hook';

const DashboardNotices = () => {
  const listRef: MutableRefObject<HTMLOListElement> =
    useRef<HTMLOListElement>(null);
  const [notices, setNotices] = useState([]);

  const length = useDashboardLength({
    type: 'notices',
    setFunction: setNotices,
    listRef,
  });
  useDashboardScroll({
    mountedLength: notices.length,
    setFunction: setNotices,
    listRef,
    length,
  });

  return (
    <div className={styles.dashboardNotices}>
      <h2>Уведомления</h2>
      <ol ref={listRef} className={'overflow-y-scroll'} id={'projectsList'}>
        {length > 0 &&
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
