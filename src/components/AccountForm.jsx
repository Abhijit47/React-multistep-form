import React from 'react';
import FormWrapper from './FormWrapper';

const AccountForm = ({ email, password, updateFields }) => {
  return (
    <FormWrapper title='Account Form'>
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        name='email'
        id='email'
        autoFocus
        required
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        name='password'
        id='password'
        required
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
};

export default AccountForm;
