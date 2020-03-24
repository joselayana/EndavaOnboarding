import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css"


export default () => (
<section id="banner">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <p className="banner-tittle">WELCOME ON BOARD!</p>
        <p>Access to this app to manage all your recruits, asign them tasks and organice their onboarding process! </p>
        <a href="#"><img src="images/welcome/9.png" className="welcome-btn"/>Login or Register</a>
      </div>
      <div className="col-md-6 text-center">
        <img src="images/design/HL_M04_07_ce.svg" className="img-fluid"/>
      </div>
    </div>
  </div>
</section>
);
