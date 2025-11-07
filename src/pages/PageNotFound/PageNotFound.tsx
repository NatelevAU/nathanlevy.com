import { Button } from '@mui/material';
import React from 'react';
import ReactGA from 'react-ga4';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import background from 'src/assets/gifs/PageNotFound.gif';

const PageNotFound: React.FC = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });

  const HomeLink: React.FC = props => <Link to="/" {...props} />;

  return (
    <div
      style={{
        color: 'black',
      }}
    >
      <Helmet>
        <title>Page Not Found</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <img src={background} alt="Page Not Found Background" style={{ height: '40vmin' }} />
      <h1>Page Not Found</h1>
      <Button component={HomeLink}>Home</Button>
    </div>
  );
};

export default PageNotFound;
