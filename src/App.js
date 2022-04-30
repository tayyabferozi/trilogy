import React from 'react';
import { Button } from '@material-ui/core';
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home'

const theme = createTheme({
 
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} exact />
            
 
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;