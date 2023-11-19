import { RegistrationProps } from './registration-props.type';
import { Fragment } from 'react';
import { Transition } from '@headlessui/react';
import SplitTextInputComponent from '@/ui/components/input-components/split-text-input.component';
import styles from './registration-input.module.scss';

const RegistrationUsername = ({
  step,
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
      show={step === 1}
      enter="transition ease-in-out duration-[450ms] transform-gpu"
      enterFrom={'translate-x-[300%] blur'}
      enterTo={'translate-x-0 filter-none'}
      leave="transition ease-in-out duration-[450ms] transform-gpu"
      leaveFrom={'translate-x-0 filter-none'}
      leaveTo={'-translate-x-[300%] blur'}
    >
      <div className={styles.registrationTextInput}>
        <h2>Давай определимся с публичным именем</h2>
        <SplitTextInputComponent
          name={'username'}
          isTouched={isTouched}
          isSubmitting={isSubmitting}
          register={register}
          error={error}
          handleClick={nextStep}
        />
      </div>
    </Transition>
  );
};
export default RegistrationUsername;
