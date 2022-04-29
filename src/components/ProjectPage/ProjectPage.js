import React from 'react';
import PropTypes from 'prop-types';
import './ProjectPage.css';
import defaultBanner from '../../assets/programmingBanner.jpg'

import BannerHeader from '../BannerHeader/BannerHeader';
import Footer from '../Footer/Footer';

const ProjectPage = (props) => {
  let tagsListDOM = [];

  for (let tag of props.project.tags) {
    tagsListDOM.push(<span className='listTag' key={'tag'+tag}>{tag}</span>);
  }

  return (
    <div className="ProjectPage">
      <BannerHeader
        big={ false }
        img={ defaultBanner }
        titles={[
          '',
          props.project.name,
          ''
        ]}
        links={[]} />
      <div className='spacer'></div>
      <div className='header'>About { props.project.name }</div>
      <div className='projDesc'>{props.project.shortDesc}</div>
      <div className='spacer'></div>
      <div className='header'>Technologies in This Project</div>
      <div className='projectTags'>
        {tagsListDOM}
      </div>
      <div className='spacer'></div>
      <div className='images'>
        <div className='imageBox'>
          <img src={defaultBanner} className='exImage'/>
          <div className='caption'>Test test!</div>
        </div>
        <div className='imageBox'>
          <img src={defaultBanner} className='exImage'/>
          <div className='caption'>Test test!</div>
        </div>
      </div>
      <div className='spacer'></div>
      <Footer />
    </div>
  )
};

ProjectPage.propTypes = {};

ProjectPage.defaultProps = {};

export default ProjectPage;
