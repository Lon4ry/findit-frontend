import styles from './dashboard-notices.module.scss';

// const createQuery = (relations: Record<string, boolean>) => {
//   let query: string = '?';
//   for (const key in relations) {
//     const value: boolean = relations[key];
//     query += `${key}=${value}&`;
//   }
//   query = query.slice(0, query.length - 1);
//   return query;
// };

const DashboardNotices = () => {
  return (
    <div className={styles.dashboardNotices}>
      <h2>Уведомления</h2>
      <ol></ol>
    </div>
  );
};
export default DashboardNotices;
