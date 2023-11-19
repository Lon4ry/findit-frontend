'use client';

import { useSearchParams } from 'next/navigation';
import { RegistrationSchema } from '@/ui/screens/auth/registration/registration.schema';
import RegistrationScreen from '@/ui/screens/auth/registration/registration.screen';

const RegistrationPage = () => {
  const searchParams = useSearchParams();
  const data = JSON.parse(searchParams.get('data'));

  if (data) {
    if (data.name) data.name = Object.values(data.name).join(' ');
    if (data.gender)
      data.gender = data.gender[0].toUpperCase() + data.gender.slice(1);
  }

  const parsedData: RegistrationSchema = data;

  return <RegistrationScreen defaultValues={parsedData} />;
};
export default RegistrationPage;
