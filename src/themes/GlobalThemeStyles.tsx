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
          margin: 0,
          padding: 0,
        },
        '#root': {
          minHeight: '100vh',
        },
      }}
    />
  );
};

export default GlobalThemeStyles;
