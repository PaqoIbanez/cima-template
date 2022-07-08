import { blueGrey, deepOrange, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
   palette: {
      mode: 'dark',
      // palette values for dark mode
      primary: blueGrey,
   }
});