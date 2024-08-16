import { Box, Button } from '@mui/material';
import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PageConfig } from 'src/config/PagesConfigTypes';

interface MenuButtonProps {
  page: PageConfig;
  handleClose: () => void;
  backgroundColor?: string;
  textColor?: string;
  highlightBackgroundColor?: string;
  highlightTextColor?: string;
  isDropDown?: boolean;
  shrunk?: boolean;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  page,
  handleClose,
  backgroundColor,
  textColor,
  highlightBackgroundColor,
  highlightTextColor,
  isDropDown,
  shrunk: isShrunk,
}) => {
  const location = useLocation();
  const { highlight = 'never' } = page;
  const isHighlight =
    !isDropDown &&
    (highlight === 'always' || (highlight === 'auto' && location.pathname === page.path));

  const textRef = useRef<HTMLParagraphElement | null>(null);

  return (
    <Button
      variant="text"
      size="large"
      component={Link}
      to={page.path}
      onClick={handleClose}
      sx={{
        width: isDropDown ? '100%' : 'auto',
        py: isDropDown ? 3 : 1,
        px: 2,
        my: isDropDown ? 0 : 2,
        mx: 0,
        minWidth: 'auto',
        backgroundColor: isHighlight ? highlightBackgroundColor : backgroundColor,
        color: isHighlight ? highlightTextColor : textColor,
        ':hover': {
          backgroundColor: isHighlight ? highlightBackgroundColor : backgroundColor,
          color: isHighlight ? highlightTextColor : textColor,
        },
        display: 'block',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: isShrunk ? 'center' : 'flex-start',
        }}
      >
        {isHighlight && page.customImageHighlighted ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginRight: isShrunk ? 0 : 3,
              padding: 0,
            }}
          >
            <page.customImageHighlighted />
          </Box>
        ) : null}
        {!isHighlight && page.customImage ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginRight: isShrunk ? 0 : 3,
              padding: 0,
            }}
          >
            <page.customImage />
          </Box>
        ) : null}
        {!isShrunk && page.name}
      </Box>
    </Button>
  );
};

export default MenuButton;
