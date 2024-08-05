import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer"> {/* Add id here */}
      <div className="footer-content">
        <div className="logo">Central CoalFields Limited</div>
        <div className="footer-links">
          <div className="useful-links">
            <h3>Useful Links</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              
            
            </ul>
          </div>
          <div className="contact-info">
            <h3>Contact Us</h3>
            <p>CCL Central Hospital</p>
            <p>Gandhinagar, Kanke Road, Ranchi-834008, Jharkhand</p>
            <p>Toll Free (Samadhan Cell): 18003456501</p>
            <p>Whatsapp No.: 7250141999</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Central CoalFields Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
