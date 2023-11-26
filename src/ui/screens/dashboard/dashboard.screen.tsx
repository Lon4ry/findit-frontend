import styles from './dashboard.module.scss';
import DashboardNotices from '@/ui/screens/dashboard/dashboard-notices';
import DashboardResponsesOffers from '@/ui/screens/dashboard/dashboard-responses-offers';
import DashboardProjects from '@/ui/screens/dashboard/dashboard-projects';
import DashboardSubscription from '@/ui/screens/dashboard/dashboard-subscription';
import { useEffect } from 'react';
import { SocketManager } from '@/lib/socket-manager';
import { useRouter } from 'next/navigation';

const DashboardScreen = () => {
  const router = useRouter();
  const socket = SocketManager.socket('/auth');
  useEffect(() => {
    socket.connect();

    socket.on('connect_error', (err) => {
      console.log(err);
      if (err.message === 'Unauthorized') router.replace('/auth/login');
    });

    return () => {
      socket.disconnect();
    };
  }, [socket, router]);

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
