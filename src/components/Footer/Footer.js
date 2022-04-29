import React from 'react';
import './Footer.css';

const email = 'ram498@drexel.edu';

const Footer = () => (
  <div className='footer'>
    <div className='contact'>Get in touch at <a href={ 'mailto:' + email }>{ email }</a></div>
    <div className='copyright'>© Ryan Magilton 2022</div>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
