import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
   palette: {
      mode: 'light',
      primary: {
         main: '#6558f5',
      },
      secondary: {
         main: '#293845',
      },
      text: {
         primary: '#293845',
         secondary: '#6558f5',
      },
   }
});