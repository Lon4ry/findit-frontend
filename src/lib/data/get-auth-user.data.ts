import { User } from '@/lib/types/user.type';

const getAuthUser = async () => {
  const res = await fetch(`/api/auth`, { cache: 'no-store' });
  const data = await res.json();
  const user: User = data.user;
  return user;
};
export default getAuthUser;
