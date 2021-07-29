import React from 'react';

import './PageNotFound.css';
import logo from '../../images/backgrounds/PageNotFound.png';

const PageNotFound = () => {
  return (
    <div className="PageNotFound">
      <header className="PageNotFound-header">
        <img src={logo} className="PageNotFound-logo" alt="logo" />
        <h1>404 - Page not found</h1>
      </header>
    </div>
  );
};

export default PageNotFound;
