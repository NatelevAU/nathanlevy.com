import React from 'react';
import { resumeUrl } from 'src/config/Config';

const Resume: React.FC<{}> = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const theme = urlParams.get('theme');
  const fullResumeUrl = theme
    ? `${resumeUrl}${resumeUrl.includes('?') ? '&' : '?'}theme=${theme}`
    : resumeUrl;

  return (
    <iframe
      id="resume"
      src={fullResumeUrl}
      style={{ width: '100%', height: '100%', border: 'none' }}
      title="Resume"
    ></iframe>
  );
};

export default Resume;
