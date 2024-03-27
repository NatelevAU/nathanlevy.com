import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';

import { emailAddress, githubUrl, linkedinUrl } from '../config/Config';

const Home: React.FC<{}> = () => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const subtitles = ['Software Engineer', 'Web Developer', 'Dog Lover'];

  const Mailto = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((subtitleIndex + 1) % subtitles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [subtitleIndex, subtitles.length]);

  ReactGA.pageview(window.location.pathname);

  return (
    <Box sx={{ paddingBottom: 5 }}>
      <h1> Nathan Levy </h1>
      <h2> {subtitles[subtitleIndex]} </h2>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <IconButton sx={{ margin: 1 }} href={githubUrl} target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </IconButton>
        <IconButton sx={{ margin: 1 }} href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </IconButton>
        <IconButton sx={{ margin: 1 }} onClick={() => Mailto(emailAddress)}>
          <EmailIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Home;
