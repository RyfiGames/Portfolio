import React from 'react';
import PropTypes from 'prop-types';
import './BannerHeader.css';
import logo from '../../assets/RM-Logo.png'

const BannerHeader = (props) => {
  
  let linksDOM = [];

  for (let link of props.links) {
    linksDOM.push(
      <span className='bannerLink' key={'link' + link.name} onClick={() => { window.open(link.url) }}>
        <img className='linkIcon' src={`images/${link.icon}`} />
        <span>{ link.name }</span>
      </span>
    )
  }

  return (
  <div className="BannerHeader">
    <img className='bannerImg' src={props.img} />
    <div className='banner1'>{ props.titles[0] }</div>
    <div className='banner2'>{ props.titles[1] }</div>
    <div className='banner3'>{props.titles[2]}</div>
    <div className='bannerLinks'>
      {linksDOM}
    </div>
  </div>
)};

BannerHeader.propTypes = {};

BannerHeader.defaultProps = {};

export default BannerHeader;
