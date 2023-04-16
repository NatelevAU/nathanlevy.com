import { Theme } from '@mui/material/styles';
import { GlobalStyles } from '@mui/system';

interface GlobalThemeStylesProps {
  theme: Theme;
}

const GlobalThemeStyles: React.FC<GlobalThemeStylesProps> = ({ theme }) => {
  return (
    <GlobalStyles
      styles={{
        html: {
          backgroundColor: theme.palette.background.default,
        },
        body: {
          backgroundColor: theme.palette.background.default,
        },
      }}
    />
  );
};

export default GlobalThemeStyles;
