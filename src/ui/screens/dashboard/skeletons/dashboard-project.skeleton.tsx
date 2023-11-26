import styles from './dashboard-skeletons.module.scss';

const DashboardProjectSkeleton = () => {
  const skeletonArr = new Array(10);
  for (let i = 0; i < skeletonArr.length; i++) skeletonArr.push(i);

  return (
    <>
      {skeletonArr.map((v) => (
        <li key={v}>
          <div className={styles.dashboardProjectSkeleton}>
            <div>
              <h1 />
              <div>
                <h6 />
                <h6 />
                <h6 />
              </div>
            </div>
            <div>
              <button />
            </div>
          </div>
        </li>
      ))}
    </>
  );
};
export default DashboardProjectSkeleton;
