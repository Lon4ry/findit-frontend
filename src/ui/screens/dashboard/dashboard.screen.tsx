import useUser from '@/ui/hooks/use-user.hook';
import SidebarComponent from '@/ui/components/sidebar/sidebar.component';

export default function DashboardScreen() {
  const { payload: user, isLoading: isUserLoading } = useUser();
  return (
    <>
      <SidebarComponent />
      <div
        className={'fixed right-0 top-0 w-[calc(100%-3rem)] h-full bg-gray-200'}
      >
        <div className={'f'}></div>
      </div>
    </>
  );
}
