import './Home.css';
import React from 'react';
import BannerHeader from '../BannerHeader/BannerHeader';
import NavBar from '../NavBar/NavBar';

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <BannerHeader />
                <h1>Technologies I Use</h1>
            </div>
            
        );
    }

}

export default Home;
