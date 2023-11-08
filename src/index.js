import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { About } from './Components/About/About';
import { Login } from './Components/NavBar/Components/Login/Login';
import { Register } from './Components/Register/Register';
import { Dashboard } from './Components/DashBoard/Dashboard';

import App from './App';
import './index.css';
import { StyledEngineProvider } from '@mui/styled-engine';
import { Plans } from './Components/Plans/Plans';
import { Providers } from './Providers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyledEngineProvider injectFirst>
    <Providers>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Aboutus' element={<About />} />
        <Route path='/plans' element={<Plans />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </Providers>
  </StyledEngineProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
