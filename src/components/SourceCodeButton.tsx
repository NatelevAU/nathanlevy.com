import Button from '@mui/material/Button';
import React from 'react';

interface SourceCodeButtonProps {
  href: string;
}

const SourceCodeButton: React.FC<SourceCodeButtonProps> = ({ href }) => {
  return (
    <Button
      size="large"
      variant="contained"
      sx={{ margin: 2 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        zIndex: 1,
      }}
    >
      Source Code
    </Button>
  );
};

export default SourceCodeButton;
