import React from 'react';
import './FooterModule.css';

function Footer() {
  return (
    <div className="footer">
      <a 
        href="https://x.com/vivianblud" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="footer-link"
      >
        <i className="fa fa-twitter footer-icon" aria-hidden="true"></i>
      </a>
      <div className="footer-contact">
        <span className="footer-contact-text">Contact us at: (917) 930-9550</span>
      </div>
      <span className="footer-text">© 2024 Shikase.com. All rights reserved.</span>
    </div>
  );
}

export default Footer;