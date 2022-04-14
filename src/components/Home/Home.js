import './Home.css';
import React from 'react';
import BannerHeader from '../BannerHeader/BannerHeader';
import NavBar from '../NavBar/NavBar';

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <BannerHeader />
                <h1>My Work</h1>
                <div className='sortHeader'>Sort By:</div>
                <div className='sortTags'>
                    <span className='sortButton'>Relevance</span>
                    <span className='sortButton'>Most Recent</span>
                    <span className='sortButton'>Least Recent</span>
                </div>
                <div className='sortHeader'>By Project Type</div>
                <div className='sortTags'>
                    <span className='sortButton'>Application</span>
                    <span className='sortButton'>Game Development</span>
                    <span className='sortButton'>Web Development</span>
                    <span className='sortButton'>API</span>
                    <span className='sortButton'>School Work</span>
                </div>
                <div className='sortHeader'>By Technology:</div>
                <div className='sortTags'>
                    <span className='sortButton'>C#</span>
                    <span className='sortButton'>Java</span>
                    <span className='sortButton'>JavaScript</span>
                    <span className='sortButton'>Python</span>
                    <span className='sortButton'>Unity3D</span>
                    <span className='sortButton'>ReactJS</span>
                    <span className='sortButton'>React Native</span>
                    <span className='sortButton'>ExpressJS</span>
                    <span className='sortButton'>VSCode</span>
                    <span className='sortButton'>IntelliJ</span>
                    <span className='sortButton'>Git</span>
                </div>
                <div className='projectContainer'>a</div>
                <div className='footer'>
                    <div className='contact'>Get in touch at <a href='mailto:ramagilton18@hotmail.com'>ramagilton18@hotmail.com</a></div>
                    <div className='copyright'>© Ryan Magilton 2022</div>
                </div>
            </div>
            
        );
    }

}

export default Home;
