import React from 'react';
import PropTypes from 'prop-types';
import './BannerHeader.css';
import bannerimg from '../../assets/programmingBanner.jpg'

const BannerHeader = () => (
  <div className="BannerHeader">
    <img src={bannerimg} />
    <div>Hello, my name is</div>
    <div>Ryan Magilton</div>
    <div>Computer Science, Game Development, Web Development</div>
  </div>
);

BannerHeader.propTypes = {};

BannerHeader.defaultProps = {};

export default BannerHeader;
