import React from 'react';
import FormInputGroup from '../components/FormInputGroup';

function SingUp() {
  return (
    <>
      <FormInputGroup label="Email" type="email" value="" onChange={(e) => console.log(e)} />
      <FormInputGroup label="Password" type="password" value="" onChange={(e) => console.log(e)} />
      <FormInputGroup label="Confirm password" type="password" value="" onChange={(e) => console.log(e)} />
    </>
  );
}

export default SingUp;
