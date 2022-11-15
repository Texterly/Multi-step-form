import React from 'react';
import SingUp from '../pages/SingUp';
import PersonalInfo from '../pages/PersonalInfo';
import Adress from '../pages/Adress';
import Button from './Button';

function Form() {
  return (
    <>
      <form className="form-container">
        <SingUp />
        <PersonalInfo />
        <Adress />
        <div className="mt-5">
          <Button
            text="Prev"
            color="dark me-3"
            onClick={(e) => {
              e.preventDefault();
            }}
          />
          <Button
            text="Next"
            color="purple"
            onClick={(e) => {
              e.preventDefault();
            }}
          />
        </div>
      </form>
    </>
  );
}

export default Form;
