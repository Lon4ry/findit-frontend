import { fetcher } from '@/lib/data/fetcher';
import useSWR from 'swr';
import { ReceivedUser } from '../../lib/types/user.type';

export default function useUser(): {
  payload: ReceivedUser;
  isLoading: boolean;
  isError: boolean;
} {
  const { data, error, isLoading } = useSWR(`/auth/who-am-i`, fetcher);
  console.log(data);
  return {
    payload: data ? data.user : null,
    isLoading,
    isError: error,
  };
}
