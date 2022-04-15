import './Home.css';
import {Component} from 'react';
import BannerHeader from '../BannerHeader/BannerHeader';
import Footer from '../Footer/Footer';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectDataList from '../../assets/projectData.json';

class Home extends Component {
    
    projectDOM = [];

    typeTagsDOM = [];
    tagsListDOM = [];
    selectedTypes = [];
    selectedTags = [];

    constructor(props) {
        super(props);
        for (let proj of ProjectDataList.projects) {
            this.projectDOM.push(<ProjectCard key={proj.name} project={proj} />);
        }
        for (let tag of ProjectDataList.projectTypes) {
            this.typeTagsDOM.push(<span className='sortButton' key={tag} onClick={() => this.filterTag(tag, true)}>{tag}</span>);
        }
        for (let tag of ProjectDataList.tagsList) {
            this.tagsListDOM.push(<span className='sortButton' key={tag} onClick={() => this.filterTag(tag, false)}>{tag}</span>);
        }
    }

    filterTag(tag, isType) {
    }

    render() {
        return (
            <div className="Home">
                <BannerHeader />
                <h1>My Work</h1>
                {/* <div className='sortHeader'>Sort By:</div>
                <div className='sortTags'>
                    <span className='sortButton'>Relevance</span>
                    <span className='sortButton'>Most Recent</span>
                    <span className='sortButton'>Least Recent</span>
                </div> */}
                <div className='sortHeader'>Sort by Project Type</div>
                <div className='sortTags'>
                    { this.typeTagsDOM }
                </div>
                <div className='sortHeader'>Or by Technologies I Use</div>
                <div className='sortTags'>
                    { this.tagsListDOM }
                </div>
                <div className='projectContainer'>
                    {this.projectDOM}
                </div>
                <Footer/>
            </div>
            
        );
    }

}

export default Home;

class ProjectData {
    name;
    desc;
    tags;
    constructor(name, desc, ...tags) {
        this.name = name;
        this.desc = desc;
        this.tags = tags;
    }
}