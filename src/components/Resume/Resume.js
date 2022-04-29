import React from 'react';
import PropTypes from 'prop-types';
import './Resume.css';
import NavBar from '../NavBar/NavBar';

const resumeLink = 'https://docs.google.com/document/d/1IYhHxmSRvq8XVji92W7FuL213ogIvOt-Y3nV1h8XIaI/preview';

const Resume = () => (
  <div className="Resume">
    <NavBar />
    <div className='spacer2'></div>
    <iframe className='iframe' src={resumeLink}></iframe>
  </div>
);

Resume.propTypes = {};

Resume.defaultProps = {};

export default Resume;
