import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import RegisterContainer from "../containers/RegisterContainer"
import LogInContainer from "../containers/LogInContainer"

class Main extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/login" component={LogInContainer} />
                    <Route exact path="/" component={RegisterContainer} />
                </Switch>
            </Fragment>
        )
    }

}

export default connect(null, null)(Main)
