import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css"

export default ({ }) => {
  return(
    <div class="wrapper">
        <div class="sidebar">
            <a className="sidebar-brand" href="/">
                <img src="images/logo/Endava_Logo_GyR.svg" />
            </a>
            <ul>
                <li><a href="#"><i class="fas fa-chart-line"></i> Dashboard</a></li>
                <li><a href="#"><i class="fas fa-list-ol"></i> My Tasks</a></li>
                <li><a href="#"><i class="fas fa-users"></i> New Hires</a></li>
                <li><a href="#"><i class="fas fa-user"></i> Users</a></li>
            </ul> 
        </div>
    </div>
  )
};