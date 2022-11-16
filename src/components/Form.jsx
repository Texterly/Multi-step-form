import React, { useState } from 'react';
import SingUp from '../pages/SingUp';
import PersonalInfo from '../pages/PersonalInfo';
import Adress from '../pages/Adress';
import Button from './Button';
import Welcome from '../pages/Welcome';

function Form() {
  const [page, setPage] = useState(0);
  const FormTitle = ['Sing up', 'Personal Info', 'Address', 'Done'];
  // const PageDisplay = () => {
  //   if (page === 0) {
  //     return <SingUp />;
  //   } else if (page === 1){
  //     return <PersonalInfo />;
  //   } else if (page === 2) {
  //     return <Adress />;
  //   }
  //   return 'Page';
  // };

  const PageDisplay = () => {
    if (page === 0) {
      return <SingUp />;
    } else if (page === 1) {
      return <PersonalInfo />;
    } else if (page === 2) {
      return <Adress />;
    } else {
      return <Welcome />;
    }
  };
  return (
    <main
      className="container shadow p-5 mt-5 rounded-3"
      style={{ maxWidth: 500 }}
    >
      <form className="form-container">
        <h1 className="display-2">{FormTitle[page]}</h1>
        <div className="text-start">{PageDisplay()}</div>
        <div className="mt-5">
          {page !== 0 && page !== 3 ? (
            <Button
              text="Prev"
              color="dark me-3"
              onClick={(e) => {
                e.preventDefault();
                setPage((currPage) => currPage - 1);
              }}
            />
          ) : null}
          <Button
            text={page !== 3 ? 'Next' : 'Finish'}
            color="purple"
            onClick={(e) => {
              e.preventDefault();
              setPage((currPage) => currPage + 1);
            }}
          />
        </div>
      </form>
    </main>
  );
}

export default Form;
