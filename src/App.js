import React from 'react';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <div id="home">
        <Navigation />
      </div>
      <About />
      <Projects />
      <hr/>
      <div id="contact-scroll">
        <Contact />
      </div>
    </div>
  );
}

export default App;
