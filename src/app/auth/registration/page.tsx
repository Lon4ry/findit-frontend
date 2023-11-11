'use client';

import RegistrationScreen from '@/ui/screens/auth/registration/registration.screen';
import { useSearchParams } from 'next/navigation';
import { RegistrationSchema } from '@/ui/screens/auth/registration/registration.schema';

const RegistrationPage = () => {
  const searchParams = useSearchParams();
  const data = JSON.parse(searchParams.get('data'));

  if (data && data.profile) {
    if (data.profile.name)
      data.profile.name = Object.values(data.profile.name).join(' ');
    if (data.profile.gender)
      data.profile.gender =
        data.profile.gender[0].toUpperCase() + data.profile.gender.slice(1);
  }

  const parsedData: RegistrationSchema = data;

  return <RegistrationScreen defaultValues={parsedData} />;
};
export default RegistrationPage;
