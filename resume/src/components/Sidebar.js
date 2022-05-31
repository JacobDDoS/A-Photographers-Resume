import React from 'react'
import '../css/SidebarCSS.css'

const Sidebar = () => {
  return (
    <div className="sidebar" id="slide-negative">
        <div className="flex nav-text" style={{"flexDirection": "column"}}>
            <a href="/">Home</a>
            <a href="/contact">Contact</a>
            <a href="/about-me">About</a>
        </div>
    </div>
  )
}

export default Sidebar


/*

import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Link, useHistory } from "react-router-dom";

const Sidebar = ({ setIsSidebarOpen }) => {
  const history = useHistory();
  let aboutMe = document.getElementById("about-me-container");
  let projects = document.getElementById("project-id");
  let contactMe = document.getElementById("contactMe-id");
  let url = window.location.href.slice(22);

  return (
    <div className="sidebar" id="slide-negative">
      <div id="blue-rectangle">
        <div id="sidebar-logo">
        </div>
      </div>
      <Button
        size="medium"
        className="sidebar-list-item"
        onClick={() => {
          if (url === "" || url[0] === "#") {
            aboutMe.scrollIntoView({ behavior: "smooth" });
            setIsSidebarOpen(false);
          } else {
            setIsSidebarOpen(false);
            history.push("/#about-me-container");
          }
        }}
      >
        <img
          className="icon-img"
          src="static/images/aboutMe_icon.png"
          alt="About Me Icon"
        />
        <span className="sidebar-list-item-text">About Me</span>
      </Button>
      <Button
        size="medium"
        className="sidebar-list-item"
        onClick={() => {
          if (url === "" || url[0] === "#") {
            projects.scrollIntoView({ behavior: "smooth" });
            setIsSidebarOpen(false);
          } else {
            setIsSidebarOpen(false);
            history.push("/#project-id");
          }
        }}
      >
        <img
          className="icon-img"
          src="static/images/projects_icon.png"
          alt="Projects Icon"
        />
        <span className="sidebar-list-item-text">Projects</span>
      </Button>
      <Button
        size="medium"
        className="sidebar-list-item"
        onClick={() => {
          if (url === "" || url[0] === "#") {
            contactMe.scrollIntoView({ behavior: "smooth" });
            setIsSidebarOpen(false);
          } else {
            setIsSidebarOpen(false);
            history.push("/#contactMe-id");
          }
        }}
      >
        <img
          className="icon-img"
          src="static/images/contactMe_icon.png"
          alt="Contact Me Icon"
        />
        <span className="sidebar-list-item-text">Contact</span>
      </Button>
    </div>
  );
};

export default Sidebar;


*/