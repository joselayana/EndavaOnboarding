import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import RegisterContainer from "../containers/RegisterContainer"
import LogInContainer from "../containers/LogInContainer"
import AdminLandingCardsContainer from "../containers/AdminLandingCardsContainer"

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
                    <Route exact path="/home" component={AdminLandingCardsContainer} />
                </Switch>
            </Fragment>
        )
    }

}

export default connect(null, null)(Main)
