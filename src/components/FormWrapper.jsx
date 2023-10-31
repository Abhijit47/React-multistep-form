import React from 'react';

const FormWrapper = ({ title = '', children = React.PureComponent }) => {
  return (
    <>
      <h2 className='form-heading'>{title}</h2>
      <div className='form-children'>{children}</div>
    </>
  );
};

export default FormWrapper;
