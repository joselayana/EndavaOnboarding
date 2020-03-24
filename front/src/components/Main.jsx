import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import RegisterContainer from "../containers/RegisterContainer"
import LogInContainer from "../containers/LogInContainer"
import AdminLandingCardsContainer from "../containers/AdminLandingCardsContainer"
import CreateRecruitContainer from "../containers/CreateRecruitContainer"
import TasksAdminContainer from "../containers/TaskAdminContainer"
import NavbarContainer from "../containers/NavbarContainer"
import BannerLoginContainer from "../containers/BannerLoginContainer"
import BannerRegisterContainer from "../containers/BannerRegisterContainer"
import SingleTaskContainer from "../containers/SingleTaskContainer"

import BannerWelcomeContainer from "../containers/BannerWelcomeContainer"

class Main extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <Fragment>
                <NavbarContainer />
                <BannerWelcomeContainer />
                <BannerLoginContainer />
                <BannerRegisterContainer />
                <Switch>
                    <Route exact path="/login" component={LogInContainer} />
                    <Route exact path="/register" component={RegisterContainer} />
                    <Route exact path="/myTasks" component={TasksAdminContainer} />
                    <Route exact path="/home" component={AdminLandingCardsContainer} />
                    <Route exact path="/newRecruit" component={CreateRecruitContainer} />
                    <Route exact path="/task/:taskId" component={SingleTaskContainer} />
                </Switch>
            </Fragment>
        )
    }

}

export default connect(null, null)(Main)
