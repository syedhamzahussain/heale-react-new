import React from 'react';

const FormErrorMessage = ({ message }: any) => {
  return <>{message && <p>{`${message}`}</p>}</>;
};

export default FormErrorMessage;
