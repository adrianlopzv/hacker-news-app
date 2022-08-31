import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import Header from './components/header/Header';
import Favs from './pages/Favs';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='*' element={<App/>}/>
      <Route path='/favs' element={<Favs/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
