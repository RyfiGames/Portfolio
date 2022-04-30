import './Home.css';
import {Component} from 'react';
import BannerHeader from '../BannerHeader/BannerHeader';
import Footer from '../Footer/Footer';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectDataList from '../../assets/projectData.json';
import bannerimg from '../../assets/programmingBanner.jpg'

class Home extends Component {
    
    projectDOM = [];

    typeTagsDOM = [];
    tagsListDOM = [];
    selectedTypes = [];
    selectedTags = [];

    constructor(props) {
        super(props);
        this.addAllProjects();
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

    addAllProjects() {
        for (let proj of ProjectDataList.projects) {
            this.projectDOM.push(<ProjectCard key={proj.name} project={proj} importantTags={[]} />);
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

        this.filterProjects();

        // Re-render
        this.forceUpdate();
    }

    filterProjects() {
        this.projectDOM = [];

        let filterTags = [];
        for (let i in ProjectDataList.projectTypes) {
            if (this.selectedTypes[i])
                filterTags.push(ProjectDataList.projectTypes[i]);
        }
        for (let i in ProjectDataList.tagsList) {
            if (this.selectedTags[i])
                filterTags.push(ProjectDataList.tagsList[i]);
        }

        if (filterTags.length == 0) {
            this.addAllProjects();
            return;
        }

        let filteredProjects = ProjectDataList.projects.filter(proj => {
            return (
                proj.tags.filter(tag => {
                    return filterTags.includes(tag);
                }).length > 0
            );
        });


        for (let proj of filteredProjects) {
            this.projectDOM.push(<ProjectCard key={proj.name} project={proj} importantTags={filterTags}/>);
        }
    }

    render() {
        return (
            <div className="Home">
                <BannerHeader
                    big={ true }
                    img={ bannerimg }
                    titles={[
                        'Hello, my name is',
                        'Ryan Magilton',
                        'Computer Science, Game Development, Web Development'
                    ]}
                    links={[
                        {
                            name: 'Resume',
                            icon: 'RM-Logo-TP.png',
                            url: 'https://ryanmagilton.com/resume/'
                        },
                        {
                            name: 'GitHub',
                            icon: 'github.png',
                            url: 'https://github.com/RyfiGames'
                        },
                        {
                            name: 'LinkedIn',
                            icon: 'linkedin.png',
                            url: 'https://www.linkedin.com/in/ryan-magilton-519500225/'
                        },
                        {
                            name: 'Itch',
                            icon: 'itch.png',
                            url: 'https://ryfi.itch.io/'
                        },
                    ]} />
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