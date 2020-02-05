import React from 'react';
import './App.css';

import Navigation from '../navigation/navigation';
import About from '../about/about';
import Projects from '../projects/projects';
import Contact from '../contact/contact';
import BGCanvas from './canvaseffect/bgcanvas';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <BGCanvas/>
        <div id="home" className="intro box">
          <p>Hello, I'm <span className="name">Kumar Aryan</span>.</p>
          <p>I'm a full stack web developer.</p>
        </div>
        <Navigation/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </React.Fragment>
  );
}

export default App;
