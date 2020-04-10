import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";
import Graphics from "../components/Graphics";
import DashboardRows from "../components/DashboardRows";
import Progress from "../components/Progress";
import Sidebar from "../components/Sidebar";

import "../css/style.css"

import {searchAllTasks} from "../redux/actions/tasks";
import {searchRecruits} from "../redux/actions/recruits"
import {searchDisciplines} from "../redux/actions/disciplines"
import {fetchUsers} from "../redux/actions/users"



class DashboardContainer extends React.Component {
    constructor() {
        super()

    }

    componentDidMount(){
      this.props.searchAllTasks()
      this.props.searchRecruits()
      this.props.searchDisciplines()
      this.props.fetchUsers()
    }

    render() {

      const {allTasks,allRecruits,allDisciplines,allUsers}=this.props;

        return (
          <div class="parent">
            <div class="div1">
              <Sidebar />
            </div>
            <div class="div2">
              <Dashboard allTasks={allTasks}/>
              <Graphics allTasks={allTasks} allRecruits={allRecruits} allDisciplines={allDisciplines} allUsers={allUsers}/>
              <DashboardRows allTasks={allTasks}/>
              <Progress allTasks={allTasks} allRecruits={allRecruits}/>
            </div>
          </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    allTasks: state.task.allTasks,
    allRecruits:state.recruit.recruits,
    allDisciplines: state.disciplines.disciplines,
    allUsers:state.user.users,
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      searchAllTasks: ()=> dispatch(searchAllTasks()),
      searchRecruits: ()=> dispatch(searchRecruits()),
      searchDisciplines: ()=> dispatch(searchDisciplines()),
      fetchUsers: ()=> dispatch(fetchUsers()),
    }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardContainer));
