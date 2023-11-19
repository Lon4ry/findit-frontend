import styles from './dashboard.module.scss';
import DashboardNotices from '@/ui/screens/dashboard/dashboard-notices';
import DashboardResponses from '@/ui/screens/dashboard/dashboard-responses';
import DashboardProjects from '@/ui/screens/dashboard/dashboard-projects';
import DashboardSuggestions from '@/ui/screens/dashboard/dashboard-suggestions';
import { useEffect } from 'react';
import { io } from 'socket.io-client';

const DashboardScreen = () => {
  useEffect(() => {
    const authSocket = io('http://localhost:3210', { withCredentials: true });

    authSocket.on('connect', () => {
      console.log('Connected');
    });

    return () => {
      authSocket.disconnect();
    };
  }, []);

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
