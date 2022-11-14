import React from 'react';

function FormInputGroup({
  labe, type, value, onChange,
}) {
  return (
    <>
      <div className="col">
        <label htmlFor="input" className="form-label">
          {labe}
        </label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="form-control"
        />
      </div>
    </>
  );
}

export default FormInputGroup;
