import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import BannerRegisterContainer from "../containers/BannerRegisterContainer";
import BannerLoginContainer from "../containers/BannerLoginContainer";


export default () => (
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#signIn" data-slide-to="0" class="active"></li>
      <li data-target="#signUp" data-slide-to="1"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <BannerLoginContainer />
      </div>
      <div class="carousel-item">
        <BannerRegisterContainer/>
      </div>
    </div>
    <a class="carousel-control-prev" href="#signUp" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Sign In</span>
    </a>
    <a class="carousel-control-next" href="#signIn" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Sign Up</span>
    </a>
  </div>
);
