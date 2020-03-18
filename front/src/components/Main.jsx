import React from "react";
import {Route, Switch} from "react-router-dom";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class Main extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
            <p>Hola Endava!!</p>
            <p>pruebaaaaaaaaaaaaaa</p>
            </div>
        )
    }
    
}

export default connect(null, null)(Main)