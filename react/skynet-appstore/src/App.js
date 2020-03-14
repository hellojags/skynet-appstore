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
              <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <button
                  id="sidebarToggleTop"
                  className="btn btn-link d-md-none rounded-circle mr-3"
                >
                  <i className="fa fa-bars"></i>
                </button>
  
                <form 
                  className="d-none d-sm-inline-block form-inline mr-md-5 ml-md-5 my-2 my-md-0 mw-100 navbar-search"
                  onSubmit={this.handleSrchSbmt}>
                  <div className="input-group">
                    <Grid
                      container
                      spacing={1}
                      alignItems="flex-end"
                      className="width-100"
                    >
                      <Grid item className="search-icon-grid">
                        <Search />
                      </Grid>
                      <Grid item className="width-90">
                        <TextField
                          id="filled-secondary"
                          label="Search the SKY"
                          name="searchKey"
                          variant="filled"
                          className="width-100"
                          onChange={this.handleSrchKeyChng}
                        /> {searchKey}
                      </Grid>
                    </Grid>
                  </div>
                </form>
  
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown no-arrow d-sm-none">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="searchDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-search fa-fw"></i>
                    </a>
  
                    <div
                      className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                      aria-labelledby="searchDropdown"
                    >
                      <form className="form-inline mr-auto w-100 navbar-search">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control bg-light border-0 small"
                            placeholder="Search the SKY..."
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                              <i className="fas fa-search fa-sm"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>
                </ul>
              </nav>
  
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
