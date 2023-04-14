import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';

import './Home.css';
import background from '../../images/backgrounds/Home.jpg';

const sectionStyle = {
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const Home: React.FC<{}> = () => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const subtitles = ['Software Engineer', 'Web Developer', 'Dog Lover'];

  const SourceLink: React.FC<{}> = props => (
    <a
      href="https://github.com/NatelevAU/natelev"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );

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
    <div className="Home" style={sectionStyle}>
      <header className="Home-header">
        <h1> Nathan Levy </h1>
        <h2> {subtitles[subtitleIndex]} </h2>
        <Button
          color="primary"
          size="large"
          variant="contained"
          sx={{ margin: 2 }}
          href="https://github.com/NatelevAU/natelev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </Button>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton
            color="primary"
            sx={{ margin: 1 }}
            href="https://github.com/NatelevAU"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="primary"
            sx={{ margin: 1 }}
            href="https://www.linkedin.com/in/nathan-levy-au"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color="primary"
            sx={{ margin: 1 }}
            onClick={() => Mailto('nathan.levy.au@gmail.com')}
          >
            <EmailIcon />
          </IconButton>
        </div>
      </header>
    </div>
  );
};

export default Home;
