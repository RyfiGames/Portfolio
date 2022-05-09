import React from 'react';
import PropTypes from 'prop-types';
import './ProjectPage.css';
import defaultBanner from '../../assets/programmingBanner.jpg'

import util from '../../utility'

import BannerHeader from '../BannerHeader/BannerHeader';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const ProjectPage = (props) => {
  let tagsListDOM = [];
  let imagesDOM = [];
  let videoDOM = null;

  const projName = (new URLSearchParams(window.location.search)).get('id');
  let project = util.getProjectByID(projName);
  if (project == null) project = defaultPage;

  for (let tag of project.tags) {
    tagsListDOM.push(<span className='listTag' key={'tag'+tag}>{tag}</span>);
  }

  for (let img of project.images) {
    imagesDOM.push(
      <div className='imageBox' key={img.path}>
        <img src={'images/screenshots/' + img.path} className='exImage'/>
        <div className='caption'>{ img.caption }</div>
      </div>
    );
  }

  if (project.video != "") {
    videoDOM = (
      <div>
        <div className='projectVideoContainer'>
          <iframe width="640" height="360"
            src={`https://www.youtube.com/embed/${project.video}`}
            allow="fullscreen;"
            className='projectVideo'
          >
          </iframe>
        </div>
        <div className='spacer'></div>
      </div>
    )
  }

  return (
    <div className="ProjectPage">
      <NavBar />
      <BannerHeader
        big={ false }
        img={ defaultBanner }
        titles={[
          '',
          project.name,
          ''
        ]}
        links={project.links} />
      <div className='spacer'></div>
      {videoDOM}
      <div className='header'>About { project.name }</div>
      <div className='projDesc'>{project.longDesc}</div>
      <div className='spacer'></div>
      <div className='header'>Technologies in This Project</div>
      <div className='projectTags'>
        {tagsListDOM}
      </div>
      <div className='spacer'></div>
      <div className='images'>
        {imagesDOM}
      </div>
      <div className='spacer'></div>
      <Footer />
    </div>
  )
};

ProjectPage.propTypes = {};

ProjectPage.defaultProps = {};

export default ProjectPage;

const defaultPage = {
  name: '404',
  shortDesc: 'This project does not exist',
  longDesc: 'This project does not exist',
  tags: [
    '404',
    '404',
    '404',
    '404',
    '404',
    '404',
    '404'
  ],
  images: []
}