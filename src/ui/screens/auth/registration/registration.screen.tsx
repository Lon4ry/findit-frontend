import RegistrationIntroduce from './registration-introduce';
import { Fragment, useState } from 'react';
import { Transition } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import RegistrationUsername from './registration-username';
import RegistrationName from './registration-name';
import RegistrationSkills from './registration-skills';
import RegistrationGender from './registration-gender';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegistrationSchema, registrationSchema } from './registration.schema';
import RegistrationPassword from './registration-password';
import RegistrationWarning from './registration-warning';
import RegistrationEmail from './registration-email';
import styles from './registration.module.scss';

const RegistrationScreen = ({
  defaultValues,
}: {
  defaultValues?: RegistrationSchema;
}) => {
  const [show, setShow] = useState(true);
  const router = useRouter();

  const [step, setStep] = useState(0);

  const {
    setValue,
    getValues,
    register,
    formState: { touchedFields, isSubmitting, errors },
    handleSubmit,
  } = useForm<RegistrationSchema>({
    defaultValues: { ...defaultValues },
    mode: 'onTouched',
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit: SubmitHandler<RegistrationSchema> = async (
    data: RegistrationSchema,
  ): Promise<void> => {
    const [firstName, lastName] = data.profile.name.split(' ');
    const parsedData = {
      ...data,
      name: { firstName: firstName, lastName: lastName },
    };

    const response = await fetch(`/api/auth/registration`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(parsedData),
    });
    if (response.status === 201) router.replace('/dashboard');
  };

  const defaultRegistrationValues = getValues();

  return (
    <Transition
      as={Fragment}
      show={show}
      appear={true}
      enter="transition ease-in-out duration-[450ms] transform-gpu"
      enterFrom={'opacity-0 backdrop-blur'}
      enterTo={'opacity-100 filter-none'}
      leave="transition ease-in-out duration-[450ms] transform-gpu"
      leaveFrom={'opacity-100 filter-none'}
      leaveTo={'opacity-0 backdrop-blur'}
      afterLeave={() => router.replace('/auth/login')}
    >
      <main className={styles.registrationScreen}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <RegistrationIntroduce
            step={step}
            nextStep={() => setStep(1)}
            backButtonAction={() => setShow(false)}
          />
          <RegistrationUsername
            isSubmitting={isSubmitting}
            register={register}
            isTouched={
              (touchedFields.user ? touchedFields.user.username : false) ||
              (defaultRegistrationValues.user
                ? !!defaultRegistrationValues.user.username
                : false)
            }
            error={errors.user ? errors.user.username : null}
            step={step}
            nextStep={() => setStep(2)}
          />

          <RegistrationName
            isSubmitting={isSubmitting}
            register={register}
            isTouched={
              (touchedFields.profile ? touchedFields.profile.name : false) ||
              (defaultRegistrationValues.profile
                ? !!defaultRegistrationValues.profile.name
                : false)
            }
            error={errors.profile ? errors.profile.name : null}
            step={step}
            nextStep={() => setStep(3)}
          />
          <RegistrationEmail
            isSubmitting={isSubmitting}
            register={register}
            isTouched={
              (touchedFields.user ? touchedFields.user.email : false) ||
              (defaultRegistrationValues.user
                ? !!defaultRegistrationValues.user.email
                : false)
            }
            error={errors.user ? errors.user.email : null}
            step={step}
            nextStep={() => setStep(4)}
          />
          <RegistrationSkills
            isSubmitting={isSubmitting}
            register={register}
            errors={errors.profile ? errors.profile.skills : null}
            step={step}
            nextStep={() => setStep(5)}
          />
          <RegistrationGender
            defaultValue={
              defaultRegistrationValues.profile
                ? defaultRegistrationValues.profile.gender
                : ''
            }
            setValue={setValue}
            isSubmitting={isSubmitting}
            step={step}
            nextStep={() => setStep(6)}
          />
          <RegistrationPassword
            register={register}
            isSubmitting={isSubmitting}
            isTouched={touchedFields.user ? touchedFields.user.password : false}
            error={errors.user ? errors.user.password : null}
            step={step}
            nextStep={() => setStep(-1)}
          />
        </form>
        <RegistrationWarning
          text={'Позже вы сможете отредактировать свой профиль'}
          step={step}
          where={0}
        />
        <RegistrationWarning
          text={'Имя пользователя не будет привязано к регистру'}
          step={step}
          where={1}
        />
        <RegistrationWarning
          text={
            'Используйте настоящую почту, на него придет письмо с подтверждением'
          }
          step={step}
          where={3}
        />
        <RegistrationWarning
          text={
            'Придумайте сложный пароль, во избежании попытки украсть ваш аккаунт'
          }
          step={step}
          where={6}
        />
      </main>
    </Transition>
  );
};
export default RegistrationScreen;
