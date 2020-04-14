import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';
import { getLoggedUser } from "../redux/actions/login";

import AdminLandingCardsContainer from "../containers/AdminLandingCardsContainer"
import TasksAdminContainer from "../containers/TaskAdminContainer"
import NavbarContainer from "../containers/NavbarContainer"
import BannerLoginContainer from "../containers/BannerLoginContainer"
import BannerRegisterContainer from "../containers/BannerRegisterContainer"
import SingleTaskContainer from "../containers/SingleTaskContainer"
import RecruitContainer from "../containers/RecruitContainer"
import CreateRecruitContainer from "../containers/CreateRecruitContainer"
import UsersAdminContainer from "../containers/UsersAdminContainer"
import SingleRecruitContainer from "../containers/SingleRecruitContainer"
import SingleRecruitEditFormContainer from "../containers/SingleRecruitEditFormContainer"
import DeleteUserContainer from "../containers/DeleteUserContainer"
import TasksAdminEditFormTasksListContainer from "../containers/TasksAdminEditFormTasksListContainer"
import BannerWelcomeContainer from "../containers/BannerWelcomeContainer"
import DashboardContainer from "../containers/DashboardContainer"
import SidebarContainer from "../containers/SidebarContainer";
import MyPendingTasksContainer from "../containers/MyPendingTasksContainer";
import MyFinishedTasksContainer from "../containers/MyFinishedTasksContainer";
import TeamPendingTasksContainer from "../containers/TeamPendingTasksContainer";
import TeamFinishedTasksContainer from "../containers/TeamFinishedTasksContainer";


class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }
  componentDidMount() {
    this.props.getLoggedUser()
      .then(() => {
        this.setState({ isLoading: false })
      })
  }
  render() {
    if (this.state.isLoading) {
      return (
        <Fragment>
          <NavbarContainer />
          {/* <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
          /> */}
        </Fragment>
      )
    }
    return (
      <Fragment>


        {/* <NavbarContainer /> */}

        <Switch>
          <Route exact path="/" component={BannerWelcomeContainer} />
          <Route exact path="/login" component={BannerLoginContainer} />
          <Route exact path="/register" component={BannerRegisterContainer} />
          <Route exact path="/home" component={AdminLandingCardsContainer} />
          {/* <Route exact path="/sidebar" component={SidebarContainer} /> */}
          {/* Tasks */}
          <Route exact path="/myTasks/:userId" component={TasksAdminContainer} />
          <Route exact path="/myPendingTasks/:userId" component={MyPendingTasksContainer} />
          <Route exact path="/myFinishedTasks/:userId" component={MyFinishedTasksContainer} />
          <Route exact path="/TeamPendingTasks/:userId" component={TeamPendingTasksContainer} />
          <Route exact path="/TeamFinishedTasks/:userId" component={TeamFinishedTasksContainer} />


          <Route exact path="/task/:taskId" component={SingleTaskContainer} />
          <Route exact path="/editAvailableTasks/:taskId" component={TasksAdminEditFormTasksListContainer} />
          {/* New hires */}
          <Route exact path="/recruits" component={RecruitContainer} />
          <Route exact path="/recruit/:recruitId" component={SingleRecruitContainer} />
          <Route exact path="/recruit/edit/:recruitId" component={SingleRecruitEditFormContainer} />
          <Route exact path="/newRecruit" component={CreateRecruitContainer} />
          {/* User */}
          <Route exact path="/users" component={UsersAdminContainer} />
          <Route exact path="/deleteUser/:userId" component={DeleteUserContainer} />
          {/* Dashboar       */}
          <Route exact path="/dashboard/:userId" component={DashboardContainer} />



          {/* <Route exact path="/" component={BannerWelcomeContainer} />
          <Route exact path="/login" component={BannerLoginContainer} />
          <Route exact path="/register" component={BannerRegisterContainer} />
          <Route exact path="/myTasks/:userId" component={TasksAdminContainer} />
          <Route exact path="/users" component={UsersAdminContainer} />
          <Route exact path="/deleteUser/:userId" component={DeleteUserContainer} />
          <Route exact path="/home" component={AdminLandingCardsContainer} />
          <Route exact path="/recruits" component={RecruitContainer} />
          <Route exact path="/recruit/:recruitId" component={SingleRecruitContainer} />
          <Route exact path="/recruit/edit/:recruitId" component={SingleRecruitEditFormContainer} />
          <Route exact path="/newRecruit" component={CreateRecruitContainer} />
          <Route exact path="/task/:taskId" component={SingleTaskContainer} />
          <Route exact path="/editAvailableTasks/:taskId" component={TasksAdminEditFormTasksListContainer} />
          <Route exact path="/dashboard" component={DashboardContainer} />
          <Route exact path="/sidebar" component={SidebarContainer} /> */}
        </Switch>

      </Fragment>
    )
  }

}
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.login.user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

    getLoggedUser: () => dispatch(getLoggedUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main)
