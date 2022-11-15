import React from 'react';
import FormInputGroup from '../components/FormInputGroup';

function Adress() {
  return (
    <>
      <FormInputGroup
        type="text"
        label="Street"
        value=""
        onChange={(e) => console.log(e)}
      />
      <FormInputGroup
        type="text"
        label="City"
        value=""
        onChange={(e) => console.log(e)}
      />
    </>
  );
}

export default Adress;
