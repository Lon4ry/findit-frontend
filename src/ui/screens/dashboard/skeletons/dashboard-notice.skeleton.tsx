import styles from './dashboard-skeletons.module.scss';
import { XMarkIcon } from '@heroicons/react/20/solid';

const DashboardNoticeSkeleton = () => {
  const skeletonArr = new Array(10);
  for (let i = 0; i < skeletonArr.length; i++) skeletonArr.push(i);

  return (
    <>
      {skeletonArr.map((v) => (
        <li key={v}>
          <div className={styles.dashboardNoticeSkeleton}>
            <div>
              <h1 />
              <h6 />
            </div>
            <div>
              <button>
                <XMarkIcon />
              </button>
              <h6 />
            </div>
          </div>
        </li>
      ))}
    </>
  );
};
export default DashboardNoticeSkeleton;
