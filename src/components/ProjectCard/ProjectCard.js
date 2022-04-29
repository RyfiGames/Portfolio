import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './ProjectCard.css';
import logo from '../../assets/RM-Logo.png'

const ProjectCard = (props) => {
  let icon = logo;
  if (props.project.icon != null && props.project.icon != "") {
    icon = 'images/' + props.project.icon;
  }

  let tags = [];
  for (let x in props.project.tags) {
    if (x == props.project.shortTags) break;
    let key = props.project.name + 'tag' + x;
    const tagString = props.project.tags[x];
    let tagDOM;
    if (props.importantTags.includes(tagString)) {
      tagDOM = <span className='tag' key={key} style={{ backgroundColor: '#357CFF' }}>{props.project.tags[x]}</span>;
    } else {
      tagDOM = <span className='tag' key={key}>{props.project.tags[x]}</span>;
    }
    tags.push(tagDOM);
  }

  let navigate = useNavigate();

  return (
    <div className="ProjectCard" onClick={() => {
      navigate(`/${props.project.path}`);
      window.scrollTo(0, 0);
    }}>
      <img src={icon} className='icon' />
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
