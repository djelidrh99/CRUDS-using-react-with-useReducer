import { ThemeProvider } from '@emotion/react';
import './App.css'
import CrudsList from './CrudsList'
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import AllProvider from './AllContext';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: "#000",
      },
    },
  });

  return (
    <>
    <AllProvider>
    <ThemeProvider theme={theme}>
     <CrudsList/>
     </ThemeProvider>
     </AllProvider>
    </>
  )
}

export default App
