import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './Routes/MainRoutes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
