import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { useTranslation } from 'react-i18next';
import CustomIconButton from 'src/components/CustomIconButton';
import { emailAddress, githubUrl, linkedinUrl } from 'src/config/Config';

import workstationImage from 'src/assets/images/workstation.png';

const Mailto = (email: string) => {
  window.location.href = `mailto:${email}`;
};

const Home: React.FC = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  const { t } = useTranslation();

  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const subtitles = t('home.subtitles', { returnObjects: true }) as string[];

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((subtitleIndex + 1) % subtitles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [subtitleIndex, subtitles.length]);

  return (
    <div style={{ justifyContent: 'center' }}>
      <h1> {t('home.title')} </h1>
      <img src={workstationImage} style={{ height: '30vmin', margin: 0, padding: 0 }} />
      <h2> {subtitles[subtitleIndex]} </h2>
      <CustomIconButton IconComponent={GitHubIcon} url={githubUrl} />
      <CustomIconButton IconComponent={LinkedInIcon} url={linkedinUrl} />
      <CustomIconButton IconComponent={EmailIcon} onClick={() => Mailto(emailAddress)} />
    </div>
  );
};

export default Home;
