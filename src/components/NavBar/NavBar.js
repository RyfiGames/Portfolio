import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.css';
import logo from '../../assets/RM-Logo.png'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  let nav = useNavigate();
  return (
  <div className="NavBar">
    <img src={logo} className='navLogo' onClick={() => {gotoPage(nav, '/')}} />
    <div className='navButton' onClick={() => {gotoPage(nav, '/')}}>Home</div>
    <div className='navButton' onClick={() => {gotoPage(nav, '/resume')}}>Resume</div>
  </div>
)};

function gotoPage(navigate, path) {
  navigate(path);
  window.scrollTo(0, 0);
}

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
