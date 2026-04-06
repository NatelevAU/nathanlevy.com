import Button from '@mui/material/Button';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface SourceCodeButtonProps {
  href: string;
}

const SourceCodeButton: React.FC<SourceCodeButtonProps> = ({ href }) => {
  const { t } = useTranslation();
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
      {t('sourceCode')}
    </Button>
  );
};

export default SourceCodeButton;
