import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css"

export default () => (
<section id="nav-bar">
  <nav className="navbar navbar-light pt-2">
    <a className="navbar-brand" href="/">
      <img src="images/logo/13.png"/>
    </a>
    <div className="dropdown" id= "admin-btn">
    <button className="btn btn-secondary-nav dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Admin Name
    </button>
       <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
         <Link to="/myTasks" className="dropdown-item" href="#">My Tasks</Link>
         <Link to ="/" className="dropdown-item" href="#">Recruits</Link>
         <Link to ="/" className="dropdown-item" href="#">Dashboard</Link>
         <Link to ="/" className="dropdown-item" href="#">Users</Link>
       </div>
     </div>
  </nav>
</section>
);
