import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./BannerHeader.css";
import logo from "../../assets/RM-Logo.png";

const BannerHeader = (props) => {
  let linksDOM = [];
  let navigate = useNavigate();

  for (let link of props.links) {
    let tooltip = [];
    if (link.url.startsWith("-tooltip")) {
      tooltip.push(<div className="linkTooltip">{link.tooltip}</div>);
    }
    linksDOM.push(
      <span
        className="bannerLink"
        key={"link" + link.name}
        onClick={() => {
          if (link.url.startsWith("+")) {
            navigate("resume");
            window.scrollTo(0, 0);
          } else if (!link.url.startsWith("-")) {
            window.open(link.url);
          }
        }}
      >
        <span className="bannerLinkCont">
          <img className="linkIcon" src={`images/${link.icon}`} />
          <span>{link.name}</span>
          {tooltip}
        </span>
      </span>
    );
  }

  return (
    <div
      className="BannerHeader"
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <div
        className="bannerImg"
        style={{ backgroundImage: `url(${props.img})` }}
      ></div>
      <div className="banner1">{props.titles[0]}</div>
      <div className="banner2">{props.titles[1]}</div>
      <div className="banner3">{props.titles[2]}</div>
      <div className="bannerLinks">{linksDOM}</div>
    </div>
  );
};

BannerHeader.propTypes = {};

BannerHeader.defaultProps = {};

export default BannerHeader;
