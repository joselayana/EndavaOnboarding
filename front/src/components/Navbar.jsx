import React from "react";
import { Link } from "react-router-dom";


export default () => (

  <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#">
      <i class="fas fa-snowboarding"></i>
      OnBoarding
    </a>
    <button className="btn dropdown">
       <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Admin Name
       </a>
       <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
         <Link to="/miPerfil" className="dropdown-item" href="#">My Tasks</Link>
         <Link to ="/" className="dropdown-item" href="#">Recruits</Link>
         <Link to ="/" className="dropdown-item" href="#">Dashboard</Link>
         <Link to ="/" className="dropdown-item" href="#">Users</Link>
       </div>
     </button>
  </nav>
);
