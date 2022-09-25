import React from 'react';
import './footer.css';
import {FiFacebook , FiInstagram ,FiTwitter} from 'react-icons/fi'

export const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className='footer__logo'>SAID</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target='_blank'><FiFacebook/></a>
        <a href="https://instagram.com" target='_blank'><FiInstagram/></a>
        <a href="https://twitter.com" target='_blank'><FiTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Elhasbaoui Said. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer