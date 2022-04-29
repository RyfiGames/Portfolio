import React from 'react';
import PropTypes from 'prop-types';
import './BannerHeader.css';

const BannerHeader = (props) => (
  <div className="BannerHeader">
    <img className='bannerImg' src={props.img} />
    <div className='banner1'>{ props.titles[0] }</div>
    <div className='banner2'>{ props.titles[1] }</div>
    <div className='banner3'>{ props.titles[2] }</div>
  </div>
);

BannerHeader.propTypes = {};

BannerHeader.defaultProps = {};

export default BannerHeader;
