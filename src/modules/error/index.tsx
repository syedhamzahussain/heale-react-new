import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from 'core/services/auth';

import './index.scss';

const Error = () => {
  const navigate = useNavigate();
  const authService = new AuthService();

  const goBackClickedHandler = () => {
    authService.logout();
    navigate('/auth/signIn');
    window.location.reload();
  };

  window.onbeforeunload = () => {
    authService.logout();
  };

  return (
    <div className="error-wrapper">
      <div className="error-container">
        <h1 className="error-title">
          <span className="error-title__text">500 </span>
          <span className="error-title__normal">Internal Server Error</span>
        </h1>
        <p className="error-message">
          Website Not Available. PLease Try again later.
        </p>
        <button className="btn-go-back" onClick={goBackClickedHandler}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Error;
