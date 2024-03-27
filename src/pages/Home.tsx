import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';

import CustomIconButton from '../components/CustomIconButton';
import { emailAddress, githubUrl, linkedinUrl } from '../config/Config';

import workstationImage from '../assets/images/workstation.png';

const Mailto = (email: string) => {
  window.location.href = `mailto:${email}`;
};

const Home: React.FC<{}> = () => {
  ReactGA.pageview(window.location.pathname);

  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const subtitles = ['Software Engineer', 'Web Developer', 'Dog Lover'];

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((subtitleIndex + 1) % subtitles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [subtitleIndex, subtitles.length]);

  return (
    <div style={{ justifyContent: 'center' }}>
      <h1> Nathan Levy </h1>
      <img src={workstationImage} style={{ height: '30vmin', margin: 0, padding: 0 }} />
      <h2> {subtitles[subtitleIndex]} </h2>
      <CustomIconButton IconComponent={GitHubIcon} url={githubUrl} />
      <CustomIconButton IconComponent={LinkedInIcon} url={linkedinUrl} />
      <CustomIconButton IconComponent={EmailIcon} onClick={() => Mailto(emailAddress)} />
    </div>
  );
};

export default Home;
