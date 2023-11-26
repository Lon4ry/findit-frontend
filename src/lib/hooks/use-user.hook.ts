// import { fetcher } from '@/lib/data/fetcher';
// import useSWR from 'swr';
// import { ReceivedUser } from '../../lib/types/user.type';
//
// export default function use(): {
//   payload: ReceivedUser;
//   isLoading: boolean;
//   isError: boolean;
// } {
//   const { data, error, isLoading } = useSWR(`/api/auth`, fetcher);
//   console.log(data);
//   return {
//     payload: data,
//     isLoading,
//     isError: error,
//   };
// }
