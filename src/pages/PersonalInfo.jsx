import React from 'react';
import FormInputGroup from '../components/FormInputGroup';

function PersonalInfo() {
  return (
    <>
      <FormInputGroup
        label="First name"
        type="text"
        value=""
        onChange={(e) => console.log(e)}
      />
      <FormInputGroup
        label="Last name"
        type="text"
        value=""
        onChange={(e) => console.log(e)}
      />
      <FormInputGroup
        label="User name"
        type="text"
        value=""
        onChange={(e) => console.log(e)}
      />
    </>
  );
}

export default PersonalInfo;
