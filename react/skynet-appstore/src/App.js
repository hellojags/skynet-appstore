import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Search from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";

import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  NavLink,
  Redirect
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faFan,
  faLaughWink,
  faCloudUploadAlt,
  faStar,
  faVideo,
  faBlog,
  faWifi,
  faHeadphones,
  faEllipsisV
} from "@fortawesome/free-solid-svg-icons";

import SNSearchbarComponent from "./components/sn.searchbar.component";
import SnCards from "./components/sn.cards";
import { RENDER_CATEGORY_LOGO } from "./sn.constants";
import SnRegister from "./components/sn.register";

library.add(
  faEnvelope,
  faFan,
  faLaughWink,
  faCloudUploadAlt,
  faStar,
  faVideo,
  faBlog,
  faWifi,
  faHeadphones,
  faEllipsisV
);
const useStyles = theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
});

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      searchKey: ''
    };
    this.handleSrchSbmt = this.handleSrchSbmt.bind(this);
    this.handleSrchKeyChng = this.handleSrchKeyChng.bind(this);
  }

  handleSrchSbmt(evt){
    evt.preventDefault();
    console.log("search form submitted");
  }

  handleSrchKeyChng(evt){
    evt.preventDefault();
    this.setState({
      searchKey: evt.target.value
    })
  }

  render(){
    const { searchKey } = this.state;

    return (
      <div id="wrapper">
        <Router>
          <ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
          >
            <a
              className="sidebar-brand d-flex align-items-center justify-content-center"
              href="index.html"
            >
              <div className="d-none sidebar-brand-icon rotate-n-15">
                <FontAwesomeIcon icon="laugh-wink"></FontAwesomeIcon>
              </div>
              <div className="sidebar-brand-text mx-3">SKYNET STORE</div>
            </a>
  
            <hr className="sidebar-divider my-0" />
  
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/register"
              >
                <FontAwesomeIcon icon="fan"></FontAwesomeIcon>
                <span>Register</span>
              </NavLink>
            </li>
  
            {/* <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/contact">
              <FontAwesomeIcon icon="cloud-upload-alt"></FontAwesomeIcon>
              <span>Upload</span>
            </NavLink>  
          </li> */}
  
            <hr className="sidebar-divider" />
  
            {/* <!-- Heading --> */}
            <div className="sidebar-heading">Categories</div>
  
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/apps/all"
              >
                <FontAwesomeIcon icon="star"></FontAwesomeIcon>
                <span>All</span>
              </NavLink>
            </li>
  
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/apps/video"
              >
                {RENDER_CATEGORY_LOGO("video")}
                <span>Videos</span>
              </NavLink>
            </li>
  
            {/* <!-- Nav Item - Tables --> */}
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/apps/audio"
              >
                {RENDER_CATEGORY_LOGO("audio")}
                <span>Audio</span>
              </NavLink>
            </li>
  
            {/* <!-- Nav Item - Tables --> */}
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/apps/blog"
              >
                {RENDER_CATEGORY_LOGO("blog")}
                <span>Blog</span>
              </NavLink>
            </li>
  
            {/* <!-- Nav Item - Tables --> */}
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/apps/app"
              >
                {RENDER_CATEGORY_LOGO("app")}
                <span>App</span>
              </NavLink>
            </li>
          </ul>
  
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              
  
              <Switch>
                <Route exact path="/">
                  <Redirect to="/apps/all" />
                </Route>
                <Route path="/register" component={SnRegister} />
                <Route path="/apps/:category" component={SnCards} />
                <Route path="/skyapps/:id" component={SnRegister} />
                <Route path="/contact" component={SNSearchbarComponent} />
                <Route component={SNSearchbarComponent} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default withStyles(useStyles)(App);
