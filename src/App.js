import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter, useParams } from "react-router-dom";
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import ProjectPage from './components/ProjectPage/ProjectPage';

import projectsData from './assets/projectData.json';

class App extends React.Component {
  render() {
    document.title = "Ryan Magilton";
      return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <Home /> }>
                </Route>
                <Route exact path="/home" element={ <Home /> }>
                </Route>
                <Route path="/contact" element={ <Contact /> }>
                </Route>
                <Route path="/resume" element={ <Resume /> }>
                </Route>
                <Route path="/project/:id" element={ <LoadProjectPage /> }>
                </Route>
            </Routes>
        </BrowserRouter>
      );
  }
}

export default App;

function LoadProjectPage() {
  let { id } = useParams();
  let projectData = null;
  for (let proj of projectsData.projects) {
    if (proj.path == `project/${id}`) {
      projectData = proj;
      break;
    }
  }

  return (
    <ProjectPage project={ projectData } />
  )
}
