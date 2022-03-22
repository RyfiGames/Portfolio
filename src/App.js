import './App.css';
import React from 'react';
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

class App extends React.Component {
  render() {
      return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <Home /> }>
                </Route>
                <Route exact path="/home" element={ <Home /> }>
                </Route>
                <Route path="/contact" element={ <Contact /> }>
                </Route>
            </Routes>
        </BrowserRouter>
            );
  }
}

export default App;
