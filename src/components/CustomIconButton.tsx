import { IconButton } from '@mui/material';
import React from 'react';

interface CustomIconButtonProps {
  IconComponent: React.ElementType;
  url?: string;
  onClick?: () => void;
  color?: string;
}

const CustomIconButton: React.FC<CustomIconButtonProps> = ({
  IconComponent,
  url,
  onClick,
  color = 'white',
}) => {
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <IconButton sx={{ color }} onClick={handleClick}>
      <IconComponent />
    </IconButton>
  );
};

export default CustomIconButton;
