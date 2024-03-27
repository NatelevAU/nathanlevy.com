import { Box, Button } from '@mui/material';
import React from 'react';
import ReactGA from 'react-ga';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import background from '../assets/gifs/PageNotFound.gif';

const PageNotFound: React.FC = () => {
  ReactGA.pageview(window.location.pathname);

  const HomeLink: React.FC = props => <Link to="/" {...props} />;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
      }}
    >
      <Helmet>
        <title>Page Not Found</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Box
        component="img"
        src={background}
        alt="Page Not Found Background"
        sx={{ height: '40vmin', pointerEvents: 'none' }}
      />
      <h1>Page Not Found</h1>
      <Button component={HomeLink}>Home</Button>
    </Box>
  );
};

export default PageNotFound;
