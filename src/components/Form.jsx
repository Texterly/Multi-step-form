import React from 'react';
import SingUp from '../pages/SingUp';
import PersonalInfo from '../pages/PersonalInfo';

function Form() {
  return (
    <>
      <form className="form-container">
        <SingUp />
        <PersonalInfo />
      </form>
    </>
  );
}

export default Form;
