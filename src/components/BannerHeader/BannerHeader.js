import React from 'react';
import PropTypes from 'prop-types';
import './BannerHeader.css';
import bannerimg from '../../assets/programmingBanner.jpg'

const BannerHeader = () => (
  <div className="BannerHeader">
    <img className='bannerImg' src={bannerimg} />
    <div className='banner1'>Hello, my name is</div>
    <div className='banner2'>Ryan Magilton</div>
    <div className='banner3'>Computer Science, Game Development, Web Development</div>
  </div>
);

BannerHeader.propTypes = {};

BannerHeader.defaultProps = {};

export default BannerHeader;
