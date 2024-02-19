import { createTheme, Theme } from '@mui/material/styles';

export const lightTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2196F3',
    },
  },
});

export const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196F3',
    },
  },
});
