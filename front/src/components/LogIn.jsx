import React from "react";



export default ({ handleSubmit, handleChange, state }) => (

    <div className="card bg-light">
        <div className="card-body mx-auto" style={{ maxWidth: "400px" }}>
            <h4 className="card-title mt-3 text-center">Log In</h4>
            <p className="text-center">Use your corporate email to Log In</p>

            <form onSubmit={handleSubmit} >
                {/* 
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                    </div>
                    <input name="" className="form-control" placeholder="Full name" type="text" />
                </div> */}
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                    </div>
                    <input onChange={handleChange} value={state.email} name="email" className="form-control" placeholder="Email address" type="email" />
                </div>


                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                    </div>
                    <input onChange={handleChange} value={state.password} name="password" className="form-control" placeholder="Password" type="password" />
                </div>
                {state.error ? <div class="alert alert-danger" role="alert">Error: The email entered is not registered or the password is incorrect</div> : null}
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block"> Log In  </button>
                </div>

                <p className="text-center">Forgot your password? <a href="">Click here</a> </p>

            </form>
        </div>
    </div>
);
