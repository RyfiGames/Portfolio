import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css';
import logo from '../../assets/RM-Logo.png'

const ProjectCard = (props) => {
  let tags = [];
  for (let x in props.project.tags) {
    if (x == props.project.shortTags) break;
    let key = props.project.name + 'tag' + x;
    tags.push(<span className='tag' key={key}>{props.project.tags[x]}</span>);
  }
  return (
    <div className="ProjectCard">
      <img src={logo} className='icon' />
      <div className='name'>{ props.project.name }</div>
      <div className='desc'>{ props.project.shortDesc }</div>
      <div className='tagContainer'>
        { tags }
      </div>
    </div>
  )
};

ProjectCard.propTypes = {};

ProjectCard.defaultProps = {};

export default ProjectCard;
