import React from 'react';
import FormInputGroup from '../components/FormInputGroup';

function SingUp() {
  return (
    <>
      <FormInputGroup labe="Email" type="email" value="" onChange={(e) => console.log(e)} />
      <FormInputGroup labe="Password" type="password" value="" onChange={(e) => console.log(e)} />
      <FormInputGroup labe="Confirm password" type="password" value="" onChange={(e) => console.log(e)} />
    </>
  );
}

export default SingUp;
