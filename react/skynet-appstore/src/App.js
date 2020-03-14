import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

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
import { RENDER_CATEGORY_LOGO, CATEGORIES } from "./sn.constants";
import SnRegister from "./components/sn.register";
import Drawer from '@material-ui/core/Drawer';

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

const drawerWidth = 240;
const useStyles = theme => ({

  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
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
    const { classes } = this.props;
    const { searchKey } = this.state;

    return (
      <Router>
      <div className={classes.root}>
        <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {['Register'].map((text, index) => (
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/register"
              >
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
              </NavLink>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem button key="Categories">
              <ListItemText primary="Categories" />
          </ListItem>
          {CATEGORIES.map((text, index) => (
            <NavLink
            activeClassName="active"
            className="nav-link"
            to={"/apps/"+text}
          >
            <ListItem button key={text.toUpperCase()}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text.toUpperCase()} />
            </ListItem>
            </NavLink>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
      <div className={classes.toolbar} >
        
          <ul
          hidden
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
      </div>
      </main>
      </div>
        </Router>
    );
  }
}

export default withStyles(useStyles)(App);
