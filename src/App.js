import React from 'react';
import Header from './components/HeaderComponent';
import Home from './components/HomeComponent';
import AboutUs from './components/AboutUsComponent';
import ContactUs from './components/ContactUsComponent';
import Menu from './components/MenuComponent';
import Footer from './components/FooterComponent';

function App() {
  
  return (
    <div className='App'>
      <Header title="Johnny's Steakhouse" />
      <Home />
      <AboutUs />
      <ContactUs />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
