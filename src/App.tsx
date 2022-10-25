import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Main } from './components/Main';
import './App.css';
import { GraphPage } from './components/GraphPage';

const App:React.FC = () => {
  return (
    <BrowserRouter>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh"
        }}
      >
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/graph' element={<GraphPage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
