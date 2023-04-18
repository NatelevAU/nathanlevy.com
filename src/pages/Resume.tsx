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
        minHeight: 'calc(100vh - 8rem)',
      }}
    >
      <AllPagesPdfViewer pdf={resume} />
    </Box>
  );
};

export default Resume;
