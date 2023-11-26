import styles from './dashboard-content.module.scss';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import { Notice } from '@/lib/types/notice.type';
import DashboardNotice from '@/ui/screens/dashboard/dashboard-notice';
import DashboardError from '@/ui/screens/dashboard/dashboard-error';
import DashboardNoticeSkeleton from './skeletons/dashboard-notice.skeleton';

const DashboardNotices = () => {
  const { data: json, isLoading } = useSWR('/api/dashboard/notices', fetcher);

  return (
    <div className={styles.dashboardNotices}>
      <h2>Уведомления</h2>

      {isLoading ? (
        <ol className={'overflow-y-hidden'}>
          <DashboardNoticeSkeleton />
        </ol>
      ) : 'error' in json ? (
        <DashboardError />
      ) : json.length !== 0 ? (
        <ol className={'overflow-y-scroll'}>
          {json.data.map((notice: Notice) => (
            <li key={notice.id}>
              <DashboardNotice {...notice} />
            </li>
          ))}
        </ol>
      ) : (
        <></>
      )}
    </div>
  );
};
export default DashboardNotices;
