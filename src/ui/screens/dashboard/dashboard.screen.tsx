import styles from './dashboard.module.scss';
import DashboardNotices from '@/ui/screens/dashboard/dashboard-notices';
import DashboardResponsesOffers from '@/ui/screens/dashboard/dashboard-responses-offers';
import DashboardProjects from '@/ui/screens/dashboard/dashboard-projects';
import DashboardSubscription from '@/ui/screens/dashboard/dashboard-subscription';

const DashboardScreen = () => {
  return (
    <main className={styles.dashboardScreen}>
      <DashboardNotices />
      <DashboardResponsesOffers />
      <DashboardProjects />
      <DashboardSubscription />
    </main>
  );
};
export default DashboardScreen;
