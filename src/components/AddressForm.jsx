import React from 'react';
import FormWrapper from './FormWrapper';

const AddressForm = ({ street, city, state, zip, updateFields }) => {
  return (
    <FormWrapper title={'Address form'}>
      <label htmlFor='street'>Street</label>
      <input
        type='text'
        name='street'
        id='street'
        autoFocus
        required
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label htmlFor='city'>City</label>
      <input
        type='text'
        name='city'
        id='city'
        required
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label htmlFor='state'>State</label>
      <input
        type='text'
        name='state'
        id='state'
        required
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <label htmlFor='zip'>Zip</label>
      <input
        type='number'
        name='zip'
        id='zip'
        required
        value={zip}
        onChange={(e) => updateFields({ zip: e.target.value })}
      />
    </FormWrapper>
  );
};

export default AddressForm;
