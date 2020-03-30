import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css"

export default ({user, onLogout}) => (
<section id="nav-bar">
  <nav className="navbar navbar-light pt-2">
    <a className="navbar-brand" href="/">
      <img src="images/logo/Endava_Logo.svg"/>
    </a>
    
    
    {(user.name) ? (
      <>
        <button onClick={onLogout} type="button" class="btn btn-light">Log Out</button>

        <div className="dropdown" id= "admin-btn">
          <button className="btn btn-secondary-nav dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {user.name}
          </button>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <Link to={`/myTasks/${user.id}`} className="dropdown-item" href="#">My Tasks</Link>
            <Link to ="/recruits" className="dropdown-item" href="#">Recruits</Link>
            <Link to ="/" className="dropdown-item" href="#">Dashboard</Link>
            <Link to ="/" className="dropdown-item" href="#">Users</Link>
          </div>
       </div>
      </>
    ):(
      <>
      <Link to= "/register"><button type="button" class="btn btn-light">Register</button></Link>
      <Link to="/login"><button type="button" class="btn btn-light">Log In</button></Link>
      </>
    )}
    </nav>
    

</section>
);
