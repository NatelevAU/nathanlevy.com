import { Box, Button } from '@mui/material';
import React from 'react';
import ReactGA from 'react-ga';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import logo from '../../assets/backgrounds/PageNotFound.png';

const PageNotFound: React.FC<{}> = () => {
  const HomeLink: React.FC<{}> = props => <Link to="/" {...props} />;

  ReactGA.pageview(window.location.pathname);

  return (
    <Box
      sx={{
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'rgb(0, 0, 0)',
      }}
    >
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
        }}
      />
      <h1>404 - Page not found</h1>
      <Button size="large" variant="contained" color="primary" component={HomeLink}>
        Home
      </Button>
    </Box>
  );
};

export default PageNotFound;
