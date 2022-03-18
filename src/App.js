import React from 'react';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import { Outlet } from 'react-router-dom'

function App() {
  
  return (
    <div className='App'>
      <Header title="Johnny's Steakhouse" />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
