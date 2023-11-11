import { host } from '../const';
import { ReceivedProfile } from '../types/profile.type';

export default async function getProfilesData(): Promise<ReceivedProfile> {
  const res = await fetch(`${host}/api/profiles`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  console.log(data);
  return data.user ? data.user : null;
}
