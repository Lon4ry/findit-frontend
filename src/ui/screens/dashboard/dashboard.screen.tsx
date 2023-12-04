import styles from './dashboard.module.scss';
import DashboardNotices from '@/ui/screens/dashboard/dashboard-notices/dashboard-notices';
import DashboardResponsesOffers from '@/ui/screens/dashboard/dashboard-responses-offers/dashboard-responses-offers';
import DashboardSubscription from '@/ui/screens/dashboard/dashboard-subscription/dashboard-subscription';
import DashboardProjects from '@/ui/screens/dashboard/dashboard-projects/dashboard-projects';

const DashboardScreen = () => {
  return (
    <main className={styles.screen}>
      <DashboardNotices />
      <DashboardResponsesOffers />
      <DashboardProjects />
      <DashboardSubscription />
    </main>
  );
};
export default DashboardScreen;
