import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import LogIn from "../components/LogIn";

class LogInContainer extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <LogIn />
            </div>
        )
    }
}

export default LogInContainer;
