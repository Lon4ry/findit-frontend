import useDashboard from '@/lib/hooks-contexts/dashboard/use-dashboard.hook';
import styles from '@/ui/screens/dashboard/dashboard-content.module.scss';
import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import { useUser } from '@/lib/hooks-contexts/user.context';
import { UserType } from '@/lib/types/user.type';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { ProjectType } from '@/lib/types/project.type';

const DashboardResponseOffer = ({ index }: { index: number }) => {
  const user: UserType = useUser();

  const responseOffer: ProjectType = useDashboard('responses-offers', index);

  const status =
    responseOffer &&
    responseOffer.projectToUsers.find((value) => value.user.id === user.id)
      .status;

  return (
    user &&
    responseOffer && (
      <li key={responseOffer.id}>
        <div className={styles.responseOffer}>
          <div>
            <div>
              <ClockIcon />
            </div>
            <div>
              <h1>
                {status === 'userRequested'
                  ? `Отклик по проекту "${responseOffer.title}"`
                  : status === 'userInvited'
                    ? `Оффер по проекту "${responseOffer.title}"`
                    : ''}
              </h1>
              <div>
                {status === 'userRequested' ? (
                  <></>
                ) : status === 'userInvited' ? (
                  <>
                    <h6>{responseOffer.budget}</h6>
                    <h6>
                      {
                        responseOffer.projectToUsers.find(
                          (value) => value.isOwner,
                        ).user.username
                      }
                    </h6>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div>
            {status === 'userInvited' ? (
              <>
                <button>
                  <CheckIcon />
                </button>
                <button>
                  <XMarkIcon />
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </li>
    )
  );
};
export default DashboardResponseOffer;
