import { Box } from '@mui/material';
import React from 'react';

const Resume: React.FC<{}> = () => {
  const googleDriveEmbedUrl =
    'https://drive.google.com/file/d/1COmkzJK7eUI51GdBAyjtipGIYy7725Ri/preview';

  return (
    <Box
      id="resume"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      {/* <AllPagesPdfViewer pdf={resume} /> */}
      <iframe
        src={googleDriveEmbedUrl}
        style={{ width: '100%', height: '500px', border: 'none' }}
        title="Resume"
      ></iframe>
    </Box>
  );
};

export default Resume;
