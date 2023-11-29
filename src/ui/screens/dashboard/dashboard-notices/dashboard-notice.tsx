import styles from '@/ui/screens/dashboard/dashboard-content.module.scss';
import { XMarkIcon } from '@heroicons/react/20/solid';
import useDashboard from '@/lib/hooks/dashboard/use-dashboard.hook';
import { Notice } from '@/lib/types/notice.type';
import axiosInstance from '@/lib/axios';
import { useRef } from 'react';

const DashboardNotice = ({ index }: { index: number }) => {
  const notice: Notice = useDashboard('notices', index);
  const ref = useRef<HTMLLIElement>(null);

  const removeNotice = () => {
    axiosInstance
      .post(`/api/dashboard/notices/${notice.id}?action=remove`)
      .then((res) => {
        const element = ref.current;

        if (!element) return;

        if (res.data === notice.id) element.remove();
      });
  };

  return (
    notice && (
      <li key={notice.id} ref={ref}>
        <div className={styles.dashboardNotice}>
          <div>
            <h1>{notice.message}</h1>
            <h6>{notice.type}</h6>
          </div>
          <div>
            <button onClick={removeNotice}>
              <XMarkIcon />
            </button>
            <h6>{new Date(notice.createdAt).toLocaleString()}</h6>
          </div>
        </div>
      </li>
    )
  );
};
export default DashboardNotice;
