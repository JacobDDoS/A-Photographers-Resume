import React from "react";
import '../css/BackdropCSS.css'

const Backdrop = ({ setIsSidebarOpen }) => {
  return <div id="back-drop" onClick={() => setIsSidebarOpen(false)}></div>;
};

export default Backdrop;
