import projectsData from './assets/projectData.json';

function getProjectByID(id) {
    let projectData = null;
    for (let proj of projectsData.projects) {
      if (proj.path == `project?id=${id}`) {
          projectData = proj;
          break;
      }
    }
    
    return projectData;
}

export default {getProjectByID};