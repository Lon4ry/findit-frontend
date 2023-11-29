import styles from '@/ui/screens/dashboard/dashboard-content.module.scss';
import { MutableRefObject, Suspense, useRef, useState } from 'react';
import useDashboardLength from '@/lib/hooks/dashboard/use-dashboard-length.hook';
import useDashboardScroll from '@/lib/hooks/dashboard/use-dashboard-scroll.hook';
import DashboardResponseOffer from '@/ui/screens/dashboard/dashboard-responses-offers/dashboard-response-offer';
import DashboardResponseOfferSkeleton from '@/ui/screens/dashboard/dashboard-responses-offers/dashboard-response-offer.skeleton';

const DashboardResponsesOffers = () => {
  const listRef: MutableRefObject<HTMLOListElement> =
    useRef<HTMLOListElement>(null);
  const [notices, setNotices] = useState([]);

  const length = useDashboardLength({
    type: 'responses-offers',
    setFunction: setNotices,
    listRef,
  });
  useDashboardScroll({
    mountedLength: notices.length,
    setFunction: setNotices,
    listRef,
    length,
  });

  return (
    <div className={styles.dashboardResponsesOffers}>
      <h2>Отклики и предложения</h2>
      <ol ref={listRef} className={'overflow-y-scroll'} id={'projectsList'}>
        {length > 0 &&
          [...notices].map((_, index) => (
            <Suspense key={index} fallback={<DashboardResponseOfferSkeleton />}>
              <DashboardResponseOffer index={index} />
            </Suspense>
          ))}
      </ol>
    </div>
  );
};
export default DashboardResponsesOffers;
