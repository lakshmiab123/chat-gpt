import React from "react";
import "./Navbar.css";
import dashboardIcon from "../img/Widget 5.png";
import homeicon from "../img/Hamburger Menu.png";
import feedicon from "../img/Feed.png";
import projecticon from "../img/Vector.png";
import analyticsicon from "../img/Graph.png";
import settingsicon from "../img/Shape.png";
import usericon from "../img/User Rounded.png";
import logouticon from "../img/Logout.png";
import gemicon from "../img/GEM-stationery design file 1-03 1 (1).png";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav flex-column">
        <li className="nav-item gem-icon">
          <a className="nav-link" href="#">
            <img src={gemicon} alt="GEM Icon" />
          </a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#">
            <img src={dashboardIcon} alt="Dashboard Icon" /> Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">
            <img src={homeicon} alt="Home Icon" className="nav-icon" />
            Template
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <img src={feedicon} alt="Feed Icon" className="nav-icon" />
            Feed
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <img src={projecticon} alt="Project Icon" className="nav-icon" />
            Project
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <img src={usericon} alt="User Icon" className="nav-icon" />
            User Role
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <img src={analyticsicon} alt="Analytics Icon" className="nav-icon" />
            Analytics
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <img src={settingsicon} alt="Settings Icon" className="nav-icon" />
            Settings
          </a>
        </li>
        <li className="nav-item">
          <span className="nav-link disabled" aria-disabled="true">
            <img src={logouticon} alt="Logout Icon" className="nav-icon" />
            Logout
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
