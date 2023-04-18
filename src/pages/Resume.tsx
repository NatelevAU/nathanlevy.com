import { Box } from '@mui/material';
import React from 'react';

import resume from '../assets/documents/NathanLevy_CV.pdf';
import AllPagesPdfViewer from '../components/pdf/AllPagesPdfViewer';

const Resume: React.FC<{}> = () => {
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
      <AllPagesPdfViewer pdf={resume} />
    </Box>
  );
};

export default Resume;
