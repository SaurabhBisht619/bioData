import React, { useState } from 'react';
import "./header.css";
import Web from './web';
import Mobile from './mobile';

function Header() {
  const[isOpen, setIsOpen] = useState(false);

    return (
      <div className="header">
        <img src={require('../../assets/myimg2.jpeg').default} alt="logo" className="display-pic"></img>
        <div className="logo"> Gajender Singh Bisht </div>
        <div className="menu">
            <div className="web-menu">
              <Web />
            </div>
            <div className="mobile-menu">
              <div onClick={() => setIsOpen(!isOpen)}>
              <i class="fi-rr-align-justify menu-icon"></i>
              </div>
              {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
            </div>
        </div>
      </div>
    );
  }
  
  export default Header;