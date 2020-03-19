import React from "react";
import {Route, Switch} from "react-router-dom";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

import Register from "../components/Register";

class RegisterContainer extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
              <Register/>
            </div>
        )
    }
}

export default RegisterContainer;
