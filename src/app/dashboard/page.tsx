'use client';

import DashboardScreen from '@/ui/screens/dashboard/dashboard.screen';
import { UserProvider } from '@/lib/hooks-contexts/user.context';
import SidebarComponent from '@/ui/components/sidebar/sidebar.component';

const DashboardPage = () => {
  return (
    <UserProvider>
      <DashboardScreen />
      <SidebarComponent />
    </UserProvider>
  );
};
export default DashboardPage;
