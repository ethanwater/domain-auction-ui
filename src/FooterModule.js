import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <p>© 2024 shikase.com</p>
      <a 
        href="https://x.com/vivianblud" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="footer-link"
      >
        <i className="fa fa-twitter footer-icon" aria-hidden="true"></i>
      </a>
    </div>
  );
}

export default Footer;