'use server';

import { User } from '@/lib/types/user.type';

const getAuthUser = async (relations?: {
  profile: boolean;
  user: boolean;
  notice: boolean;
}): Promise<User> => {
  let query = relations
    ? '?' +
      Object.keys(relations)
        .map((key) => console.log(key))
        .join('')
    : '';
  query = relations ? query.slice(0, query.length - 1) : '';

  const res = await fetch(`/api/auth${query}`, {
    cache: 'no-store',
  });
  return (await res.json()).user;
};
export default getAuthUser;
