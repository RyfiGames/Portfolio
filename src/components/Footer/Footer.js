import React from "react";
import "./Footer.css";

const email = "ryanmagilton@outlook.com";

const Footer = () => (
  <div className="footer">
    <div className="contact">
      Get in touch at <a href={"mailto:" + email}>{email}</a>
    </div>
    <div className="copyright">© Ryan Magilton 2023</div>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
