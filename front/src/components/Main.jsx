import React from "react";
import {Route, Switch} from "react-router-dom";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

import RegisterContainer from "../containers/RegisterContainer"

class Main extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
              <h1>Holaholahola</h1>
              <RegisterContainer/>
            </div>
        )
    }

}

export default connect(null, null)(Main)
