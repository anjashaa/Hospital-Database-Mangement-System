import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src="../images/watermark.jpg" alt="CCL Logo" style={{ height: '50px', width: '100px' }} /> {/* Adjust the height as necessary */}
          </Link>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/terms">T&C</Link></li>
          <li>
            <ScrollLink
              to="footer"
              smooth={true}
              duration={500}
            >
              Contact Us
            </ScrollLink>
          </li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
         
        </ul>
      </nav>
    </header>
  );
};

export default Header;
