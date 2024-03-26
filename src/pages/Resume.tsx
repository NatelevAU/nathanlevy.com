import React from 'react';

const Resume: React.FC<{}> = () => {
  const googleDriveEmbedUrl =
    'https://drive.google.com/file/d/1COmkzJK7eUI51GdBAyjtipGIYy7725Ri/preview';

  return (
    <iframe
      id="resume"
      src={googleDriveEmbedUrl}
      style={{ width: '100%', height: '100%', border: 'none' }}
      title="Resume"
    ></iframe>
  );
};

export default Resume;
