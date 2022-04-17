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
            this.projectDOM.push(<ProjectCard key={proj.name} project={proj} importantTags={[]}/>);
        }
        for (let tagID in ProjectDataList.projectTypes) {
            let tag = ProjectDataList.projectTypes[tagID];
            this.typeTagsDOM.push(<span className='sortButton' key={'type' + tagID} onClick={() => this.filterTag(tagID, true)}>{tag}</span>);
            this.selectedTypes[tagID] = false;
        }
        for (let tagID in ProjectDataList.tagsList) {
            let tag = ProjectDataList.tagsList[tagID];
            this.tagsListDOM.push(<span className='sortButton' key={'tag'+tagID} onClick={() => this.filterTag(tagID, false)}>{tag}</span>);
            this.selectedTags[tagID] = false;
        }
    }

    filterTag(tagID, isType) {
        if (isType) {
            let tag = ProjectDataList.projectTypes[tagID];
            let selected = !this.selectedTypes[tagID];
            this.selectedTypes[tagID] = selected;
            if (selected) {
                this.typeTagsDOM[tagID] = <span className='sortButton' style={{ backgroundColor: '#357CFF' }} key={'type' + tagID} onClick={() => this.filterTag(tagID, true)}>{tag}</span>;
            } else {
                this.typeTagsDOM[tagID] = <span className='sortButton' key={'type' + tagID} onClick={() => this.filterTag(tagID, true)}>{tag}</span>;
            }
        } else {
            let tag = ProjectDataList.tagsList[tagID];
            let selected = !this.selectedTags[tagID];
            this.selectedTags[tagID] = selected;
            if (selected) {
                this.tagsListDOM[tagID] = <span className='sortButton' style={{ backgroundColor: '#357CFF' }} key={'tag' + tagID} onClick={() => this.filterTag(tagID, false)}>{tag}</span>;
            } else {
                this.tagsListDOM[tagID] = <span className='sortButton' key={'tag' + tagID} onClick={() => this.filterTag(tagID, false)}>{tag}</span>;
            }
        }

        this.projectDOM = [];
        for (let proj of ProjectDataList.projects) {
            this.projectDOM.push(<ProjectCard key={proj.name} project={proj} importantTags={[]}/>);
        }

        // Re-render
        this.forceUpdate();
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