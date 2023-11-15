import styles from './dashboard-notices.module.scss';
import getAuthUser from '@/lib/data/get-auth-user.data';

const DashboardNotices = () => {
  getAuthUser().then();
  return (
    <div className={styles.dashboardNotices}>
      <h2>Уведомления</h2>
      <ol></ol>
    </div>
  );
};
export default DashboardNotices;
