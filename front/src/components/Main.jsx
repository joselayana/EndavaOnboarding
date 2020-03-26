import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import AdminLandingCardsContainer from "../containers/AdminLandingCardsContainer"
import TasksAdminContainer from "../containers/TaskAdminContainer"
import NavbarContainer from "../containers/NavbarContainer"
import BannerLoginContainer from "../containers/BannerLoginContainer"
import BannerRegisterContainer from "../containers/BannerRegisterContainer"
import SingleTaskContainer from "../containers/SingleTaskContainer"
import RecruitContainer from "../containers/RecruitContainer"
import CreateRecruitContainer from "../containers/CreateRecruitContainer"

import BannerWelcomeContainer from "../containers/BannerWelcomeContainer"

class Main extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <Fragment>
                <NavbarContainer />
                <Switch>
                    <Route exact path="/" component={BannerWelcomeContainer} />  
                    <Route exact path="/login" component={BannerLoginContainer} />
                    <Route exact path="/register" component={BannerRegisterContainer} />
                    <Route exact path="/myTasks" component={TasksAdminContainer} />
                    <Route exact path="/home" component={AdminLandingCardsContainer} />
                    <Route exact path="/recruits" component={RecruitContainer} />
                    <Route exact path="/newRecruit" component={CreateRecruitContainer} />
                    <Route exact path="/task/:taskId" component={SingleTaskContainer} />
                </Switch>
            </Fragment>
        )
    }

}

export default connect(null, null)(Main)
