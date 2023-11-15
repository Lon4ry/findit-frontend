import styles from './dashboard.module.scss';
import DashboardNotices from '@/ui/screens/dashboard/dashboard-notices';
import DashboardResponses from '@/ui/screens/dashboard/dashboard-responses';
import DashboardProjects from '@/ui/screens/dashboard/dashboard-projects';
import DashboardSuggestions from '@/ui/screens/dashboard/dashboard-suggestions';

const DashboardScreen = () => {
  return (
    <main className={styles.dashboardScreen}>
      <DashboardNotices />
      <DashboardResponses />
      <DashboardProjects />
      <DashboardSuggestions />
    </main>
  );
};
export default DashboardScreen;
