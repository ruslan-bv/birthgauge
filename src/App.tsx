import * as React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import { Main } from './components/Main';

const App:React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh"
      }}
    >
      <Main />
    </Box>
  );
}

export default App;
