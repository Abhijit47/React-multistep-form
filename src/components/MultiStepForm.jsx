import React, { useState } from 'react';
import { useMultistepForm } from '../hooks/useMultistepForm';
import UserForm from '../components/UserForm';
import AddressForm from '../components/AddressForm';
import AccountForm from '../components/AccountForm';
import { INITIAL_DATA } from '../constants';

const MultiStepForm = () => {
  const [data, setData] = useState(INITIAL_DATA);
  // function for handle change partial form-fields
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  // function for handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    if (!isLastStep) return next();
    alert('Successful account creation!');
  };
  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div className='form-steps'>
          {currentStepIndex + 1}/{steps.length}
        </div>
        {step}
        <div className='btn-container'>
          {!isFirstStep && (
            <button type='button' onClick={back}>
              Prev
            </button>
          )}
          <button type='submit'>{isLastStep ? 'Finish' : 'Next'}</button>
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
