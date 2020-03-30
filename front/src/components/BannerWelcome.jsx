import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css"


export default () => (
<section id="banner">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <p className="banner-tittle">WELCOME ON BOARD!</p>
        <p>ACCESS THIS APP TO MANAGE ALL YOUR RECRUITS, ASIGN THEM TASKS AND ORGANICE THEIR ONBOARDING PROCESS </p>
        <Link to = "/register" ><img src="images/welcome/3.png" className="welcome-btn"/>LOGIN OR REGISTER</Link>
      </div>
      <div className="col-md-6 text-center">
        <img src="images/welcome/1/welcome1.svg" className="img-fluid"/>
      </div>
    </div>
  </div>
</section>
);
