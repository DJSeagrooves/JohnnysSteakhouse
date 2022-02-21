import React from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import AboutUs from './AboutUsComponent';
import ContactUs from './ContactUsComponent';
import Menu from './MenuComponent';
import Footer from './FooterComponent';
import background from './background.jpg'

function App() {
  
  return (
    <div className='App' style={{ backgroundImage: `url(${background})`}}>
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
