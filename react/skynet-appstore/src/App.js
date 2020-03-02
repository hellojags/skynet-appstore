import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faFan, faLaughWink, faCloudUploadAlt, faStar, faVideo, faBlog, faWifi,
          faHeadphones } from '@fortawesome/free-solid-svg-icons';

import SNSearchbarComponent from './components/sn.searchbar.component';

library.add(faEnvelope, faFan, faLaughWink, faCloudUploadAlt, faStar, faVideo, faBlog, faWifi,
            faHeadphones);

function App() {
  return (
    <div id="wrapper">
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
          <div className="d-none sidebar-brand-icon rotate-n-15">
            <FontAwesomeIcon icon="laugh-wink"></FontAwesomeIcon>
          </div>
          <div className="sidebar-brand-text mx-3">SKYNET SEARCH <sup>A</sup></div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <FontAwesomeIcon icon="fan"></FontAwesomeIcon>
            <span>Register</span></a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <FontAwesomeIcon icon="cloud-upload-alt"></FontAwesomeIcon>
            <span>Upload</span></a>
        </li>

      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">
        Categories
      </div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li className="d-none nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
          <i className="fas fa-fw fa-folder"></i>
          <span>Pages</span>
        </a>
        <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Login Screens:</h6>
            <a className="collapse-item" href="login.html">Login</a>
            <a className="collapse-item" href="register.html">Register</a>
            <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
            <div className="collapse-divider"></div>
            <h6 className="collapse-header">Other Pages:</h6>
            <a className="collapse-item" href="404.html">404 Page</a>
            <a className="collapse-item" href="blank.html">Blank Page</a>
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - Charts --> */}
      <li className="nav-item active">
        <a className="nav-link" href="charts.html">
          <FontAwesomeIcon icon="star"></FontAwesomeIcon>
          <span>All</span></a>
      </li>
      
      {/* <!-- Nav Item - Charts --> */}
      <li className="nav-item">
        <a className="nav-link" href="charts.html">
          <FontAwesomeIcon icon="video"></FontAwesomeIcon>
          <span>Videos</span></a>
      </li>

      {/* <!-- Nav Item - Tables --> */}
      <li className="nav-item">
        <a className="nav-link" href="tables.html">
          <FontAwesomeIcon icon="headphones"></FontAwesomeIcon>
          <span>Audio</span></a>
      </li>

      {/* <!-- Nav Item - Tables --> */}
      <li className="nav-item">
        <a className="nav-link" href="tables.html">
          <FontAwesomeIcon icon="blog"></FontAwesomeIcon>
          <span>Blog</span></a>
      </li>

      {/* <!-- Nav Item - Tables --> */}
      <li className="nav-item">
        <a className="nav-link" href="tables.html">
          <FontAwesomeIcon icon="wifi"></FontAwesomeIcon>
          <span>WebApp</span></a>
      </li>

    </ul>
    {/* End of Sidebar  */}
      <SNSearchbarComponent />
    </div>
  );
}

export default App;
