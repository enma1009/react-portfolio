import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
// import logo from './logo.svg';
import './assets/App.css';
import HeaderSection from './components/header-section';
import ServicesSection from './components/services-section';
import WorkSection from './components/work-section';

function App() {
  return (
    <div className="App">

      <HeaderSection />
      <ServicesSection />
      <WorkSection />
    </div>
  );
}

export default App;
