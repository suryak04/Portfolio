import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Test from './components/resume';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ContactMailIcon from '@material-ui/icons/ContactMail';

class App extends Component {
  render() {
    return (
      <Router className="app">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
          <ul className="navbar-nav navigator">
            {/* <li className="nav-item m-3">
              <Link className="nav-link" to="/">Home</Link>
            </li> */}
            <li className="nav-item m-3">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li className="nav-item m-3">
              <Link className="nav-link" to="/">About</Link>
            </li>
            <li className="nav-item m-3">
              <Link className="nav-link" to="/resume">Resume</Link>
            </li>
          </ul>
          <ul className="navbar-nav icons">
            <li className="nav-item m-1">
              <a className="nav-link" href="https://github.com/suryak04?tab=repositories" >{<GitHubIcon />}</a>
            </li>
            <li className="nav-item m-1">
              <a className="nav-link" href="https://www.linkedin.com/in/surya-vathsava/">{<LinkedInIcon />}</a>
            </li>
            <li className="nav-item m-1">
              <Link className="nav-link" to="/contact">{<ContactMailIcon />}</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/' component={About}></Route>
          <Route path='/projects' component={Projects}></Route>
          {/* <Route path='/about' component={About}></Route> */}
          <Route path='/contact' component={Contact}></Route>
          <Route path='/resume' component={Test}></Route>
        </Switch>
      </Router >
    );
  }
}

export default App;
