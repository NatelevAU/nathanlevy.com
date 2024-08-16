import React from 'react';
import { resumeUrl } from 'src/config/Config';

const Resume: React.FC<{}> = () => {
  return (
    <iframe
      id="resume"
      src={resumeUrl}
      style={{ width: '100%', height: '100%', border: 'none' }}
      title="Resume"
    ></iframe>
  );
};

export default Resume;
