import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { green, orange, purple } from '@mui/material/colors';
import React from 'react';
import useStorage from '../shared/hooks/useStorage';
import exampleThemeStorage from '../shared/storages/exampleThemeStorage';

const Providers = ({ children }) => {
  const mode = useStorage(exampleThemeStorage);
  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
