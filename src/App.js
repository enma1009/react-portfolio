import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
// import logo from './logo.svg';
import './assets/App.css';
import HeaderSection from './components/header-section';
import ServicesSection from './components/services-section';
import WorkSection from './components/work-section';
import AboutSection from './components/about-section';
import ContactSection from './components/contact-section';

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <ServicesSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

export default App;
