import React from "react";



export default () => (

  <div className="card bg-light">
  <div className="card-body mx-auto" style={{maxWidth: "400px"}}>
  	<h4 className="card-title mt-3 text-center">Log In</h4>
  	<p className="text-center">Use your corporate email to Log In</p>

	<form>

  	<div className="form-group input-group">
  		<div className="input-group-prepend">
  		    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
  		 </div>
          <input name="" className="form-control" placeholder="Full name" type="text"/>
      </div>
      <div className="form-group input-group">
      	<div className="input-group-prepend">
  		    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
  		 </div>
          <input name="" className="form-control" placeholder="Email address" type="email"/>
      </div>


      <div className="form-group input-group">
      	<div className="input-group-prepend">
  		    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
  		</div>
          <input className="form-control" placeholder="Password" type="password"/>
      </div>

      <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block"> Log In  </button>
      </div>

      <p className="text-center">Forgot youur password? <a href="">Click here</a> </p>

  </form>
  </div>
  </div>
);
