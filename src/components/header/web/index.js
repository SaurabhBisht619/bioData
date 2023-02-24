import React from 'react';
import "./web.css";

function Web() {
    return (
      <div className="web">
      <div className="web-option">
          <a href="#contact">
          <i class="fi-rr-user option-icon"></i> About
          </a>
        </div>

        <div className="web-option">
          <a href="#work">
          <i class="fi-rr-briefcase option-icon"></i> Contact Us
          </a>
        </div>

        <div className="web-option">
          <a href="#project">
          <i class="fi-rr-laptop option-icon"></i> Training
          </a>
        </div>
        
        
      </div>
    );
  }
  
  export default Web;