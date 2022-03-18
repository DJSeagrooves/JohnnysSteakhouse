import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/MenuComponent'
import AboutUs from './components/AboutUsComponent';
import ContactUs from './components/ContactUsComponent';
import Home from './components/HomeComponent';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='home' element={<Home />} />
          <Route path='menu' element={<Menu />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='contactus' element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
