import useDashboard from '@/lib/hooks/dashboard/use-dashboard.hook';
import styles from '@/ui/screens/dashboard/dashboard-content.module.scss';
import { Project } from '@/lib/types/project.type';
import { ClockIcon } from '@heroicons/react/24/outline';

const DashboardResponseOffer = ({ index }: { index: number }) => {
  const responseOffer: Project = useDashboard('responses-offers', index);

  return (
    responseOffer && (
      <li key={responseOffer.id}>
        <div className={styles.dashboardResponseOffer}>
          <div>
            <div>
              <ClockIcon />
            </div>
            <div>
              <h1>{}</h1>
              <div></div>
            </div>
          </div>
          <div></div>
        </div>
      </li>
    )
  );
};
export default DashboardResponseOffer;
