import { Box, Button } from '@mui/material';
import React from 'react';
import ReactGA from 'react-ga';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import logo from '../assets/backgrounds/PageNotFound.png';

const PageNotFound: React.FC<{}> = () => {
  const HomeLink: React.FC<{}> = props => <Link to="/" {...props} />;

  ReactGA.pageview(window.location.pathname);

  return (
    <div>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Box
        component="img"
        src={logo}
        alt="Page Not Found Logo"
        sx={{
          height: '40vmin',
          pointerEvents: 'none',
          color: 'white',
        }}
      />
      <h1>404 - Page not found</h1>
      <Button size="large" variant="contained" color="primary" component={HomeLink}>
        Home
      </Button>
    </div>
  );
};

export default PageNotFound;
