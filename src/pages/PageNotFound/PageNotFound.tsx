import { Button } from '@mui/material';
import React from 'react';
import ReactGA from 'react-ga4';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import background from 'src/assets/gifs/PageNotFound.gif';

const PageNotFound: React.FC = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  const { t } = useTranslation();

  const HomeLink: React.FC = props => <Link to="/" {...props} />;

  return (
    <div
      style={{
        color: 'black',
      }}
    >
      <title>Page Not Found</title>
      <meta name="robots" content="noindex" />
      <img src={background} alt={t('pageNotFound.imageAlt')} style={{ height: '40vmin' }} />
      <h1>{t('pageNotFound.title')}</h1>
      <Button component={HomeLink}>{t('pageNotFound.home')}</Button>
    </div>
  );
};

export default PageNotFound;
