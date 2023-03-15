import { Button } from '@mui/material';
import React from 'react';
import ReactGA from 'react-ga';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import './PageNotFound.css';
import logo from '../../images/backgrounds/PageNotFound.png';

const PageNotFound: React.FC<{}> = () => {
  const HomeLink: React.FC<{}> = props => <Link to="/" {...props} />;

  ReactGA.pageview(window.location.pathname);

  return (
    <div className="PageNotFound">
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <header className="PageNotFound-header">
        <img src={logo} className="PageNotFound-logo" alt="Page Not Found Logo" />
        <h1>404 - Page not found</h1>
        <Button size="large" variant="contained" color="primary" component={HomeLink}>
          Home
        </Button>
      </header>
    </div>
  );
};

export default PageNotFound;
