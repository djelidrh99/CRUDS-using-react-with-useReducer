import { ThemeProvider } from '@emotion/react';
import './App.css'
import CrudsList from './CrudsList'
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import AllProvider from './AllContext';
import CustomizedSnackbars from './Snackbar';

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
    <CustomizedSnackbars>
    <AllProvider>
    <ThemeProvider theme={theme}>
     <CrudsList/>
     </ThemeProvider>
     </AllProvider>
     </CustomizedSnackbars>
    </>
  )
}

export default App
