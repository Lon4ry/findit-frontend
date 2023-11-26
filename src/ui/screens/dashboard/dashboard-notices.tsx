import styles from './dashboard-content.module.scss';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import { Notice } from '@/lib/types/notice.type';
import DashboardNotice from '@/ui/screens/dashboard/dashboard-notice';

const DashboardNotices = () => {
  const { data: json, isLoading } = useSWR('/api/dashboard/notices', fetcher);

  return (
    <div className={styles.dashboardNotices}>
      <h2>Уведомления</h2>
      <ol>
        {isLoading
          ? null
          : json.length !== 0 &&
            json.data.map((notice: Notice) => (
              <li key={notice.id}>
                <DashboardNotice {...notice} />
              </li>
            ))}
      </ol>
    </div>
  );
};
export default DashboardNotices;
