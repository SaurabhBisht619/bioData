import React from 'react';
import About from './about';
import "./body.css";
import Contact from './contact';
import Projects from './projects';
import Work from './work';

function Body() {
    return (
      <div className="body">
        <section id='about'>
          <About />
        </section>

        <section id='contact'>
          <Contact />
        </section>

        <section id='work'>
          <Work />
        </section>

        <section id='project'>
          <Projects />
        </section>
        
        
      </div>
    );
  }
  
  export default Body;