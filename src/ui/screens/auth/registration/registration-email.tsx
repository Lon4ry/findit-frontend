import { Transition } from '@headlessui/react';
import { Fragment } from 'react';
import SplitTextInputComponent from '@/ui/components/input-components/split-text-input.component';
import { RegistrationProps } from './registration-props.type';
import styles from './registration-input.module.scss';

const RegistrationEmail = ({
  show,
  nextStep,
  error,
  register,
  isTouched,
  isSubmitting,
}: RegistrationProps) => {
  return (
    <Transition
      as={Fragment}
      appear={true}
      show={show}
      enter="transition ease-in-out duration-[450ms] transform-gpu"
      enterFrom={'translate-x-[300%] blur'}
      enterTo={'translate-x-0 filter-none'}
      leave="transition ease-in-out duration-[450ms] transform-gpu"
      leaveFrom={'translate-x-0 filter-none'}
      leaveTo={'-translate-x-[300%] blur'}
    >
      <div className={styles.registrationTextInput}>
        <h2>Укажи свою почту, чтобы мы смогли связаться с тобой</h2>
        <SplitTextInputComponent
          name={'email'}
          register={register}
          isSubmitting={isSubmitting}
          isTouched={isTouched}
          error={error}
          handleClick={nextStep}
        />
      </div>
    </Transition>
  );
};
export default RegistrationEmail;
