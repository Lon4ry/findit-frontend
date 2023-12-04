import styles from '@/ui/screens/dashboard/dashboard-content.module.scss';
import { ibmPlexMono } from '@/lib/fonts';
import { useUser } from '@/lib/hooks-contexts/user.context';

const DashboardSubscriptionData = () => {
  const user = useUser();

  return (
    user && (
      <div className={`${styles.subscription} ${ibmPlexMono.className}`}>
        <h3>
          {user.subscription.type ? user.subscription.type : 'Отсутствует'}
        </h3>
        <div
          className={
            user.subscription.type
              ? styles.thanksImage
              : styles.noSubscriptionImage
          }
        />
        {user.subscription.type && user.subscription.expiresIn && (
          <h3>
            Действует до{' '}
            {new Date(user.subscription.expiresIn).toLocaleDateString()}
          </h3>
        )}
        {!user.subscription.type && <button>Управлять</button>}
      </div>
    )
  );
};
export default DashboardSubscriptionData;
