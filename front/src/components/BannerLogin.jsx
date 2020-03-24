import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css"
import LogInContainer from "../containers/LogInContainer"

export default () => (
<section id="banner_white">
  <div className="container box_container">
    <div className="row">

      <div className="col-md-6 text-center">
        <img src="images/design/HL_M04_03_ce.svg" className="img-fluid"/>
      </div>

      <div className="col-md-6" style={{backgroundColor:"#1e5dac"}}>
        <LogInContainer/>
      </div>

    </div>
  </div>
</section>
);
