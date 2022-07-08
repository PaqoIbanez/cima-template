import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {darkTheme, lightTheme} from './theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <ThemeProvider theme={lightTheme}>
         {/* <CssBaseline /> */}
         <StyledEngineProvider injectFirst>
         <App />
         </StyledEngineProvider>
      </ThemeProvider>
   </React.StrictMode>
)
