import { Helmet } from 'react-helmet';

const rootURL = `${window.location.origin}test`;

export const MetaTags = ({ title, path }: { title: string; path: string }) => {
  const fullTitle = `${title}`;
  const url = `${rootURL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
};
