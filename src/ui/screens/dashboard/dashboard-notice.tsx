import { Notice } from '@/lib/types/notice.type';
import styles from '@/ui/screens/dashboard/dashboard-content.module.scss';
import { XMarkIcon } from '@heroicons/react/20/solid';

const DashboardNotice = (notice: Notice) => {
  return (
    <div className={styles.dashboardNotice}>
      <div>
        <h1>{notice.message}</h1>
        <h6>{notice.type}</h6>
      </div>
      <div>
        <button
          onClick={() =>
            fetch(`/api/dashboard/notices/${notice.id}?action=remove`, {
              method: 'POST',
            })
          }
        >
          <XMarkIcon />
        </button>
        <h6>{new Date(notice.createdAt).toLocaleString()}</h6>
      </div>
    </div>
  );
};
export default DashboardNotice;
