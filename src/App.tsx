import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import { green } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Main } from './components/Main';
import { GraphPage } from './components/GraphPage';
import './App.css';

const App:React.FC = () => {
  const theme = createTheme({
    palette: {
      primary: {
        light: green[100],
        main: green[500],
        dark: green[900]
      }
    }
  })

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            backgroundColor: "#faf0e6"
          }}
        >
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/graph' element={<GraphPage />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
