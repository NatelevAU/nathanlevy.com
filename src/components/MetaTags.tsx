const rootURL = `${window.location.origin}`;

export const MetaTags = ({ title, path }: { title: string; path: string }) => {
  const fullTitle = `${title}`;
  const url = `${rootURL}${path}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:url" content={url} />
    </>
  );
};
