import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: '#1976d2',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

export default theme;
