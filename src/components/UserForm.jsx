import React from 'react';
import FormWrapper from './FormWrapper';

const UserForm = ({ firstName, lastName, age, updateFields }) => {
  return (
    <FormWrapper title='User Details'>
      <label htmlFor='firstname'>First Name</label>
      <input
        type='text'
        name='firstname'
        id='firstname'
        autoFocus
        required
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label htmlFor='lastname'>Last Name</label>
      <input
        type='text'
        name='lastname'
        id='lastname'
        required
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label htmlFor='age'>Age</label>
      <input
        type='number'
        name='age'
        id='age'
        min={1}
        required
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  );
};

export default UserForm;
