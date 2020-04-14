import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";
import Graphics from "../components/Graphics";
import DashboardRows from "../components/DashboardRows";
import Progress from "../components/Progress";
import SidebarContainer from "../containers/SidebarContainer";

import "../css/style.css"

import { searchAllTasks, searchAllTasksDash } from "../redux/actions/tasks";
import { searchRecruits } from "../redux/actions/recruits"
import { searchDisciplines } from "../redux/actions/disciplines"
import { fetchUsers } from "../redux/actions/users"
import { searchTasks, searchTasksRecruits } from "../redux/actions/tasks"



class DashboardContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            responsable: "",
            fromDate: "",
            toDate: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSubmit2 = this.handleSubmit2.bind(this)
        this.handleClickDash = this.handleClickDash.bind(this)
    }

    componentDidMount() {
        this.props.searchAllTasks()
        this.props.searchRecruits()
        this.props.searchDisciplines()
        this.props.fetchUsers()
        const idUser = this.props.match.params.userId
        this.props.searchTasks(idUser)
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.responsable) {
            let idUser;
            this.props.allUsers.map((user) => {
                let inicio = this.state.responsable.indexOf("(") + 1
                let fin = this.state.responsable.length - 1
                let idSelected = this.state.responsable.slice(inicio, fin);
                (parseInt(idSelected) == user.id) ? (idUser = user.id) : null
            })
            this.props.searchTasks(idUser)
        } else {
            alert("You must complete the field")
        }
    }

    handleSubmit2(e){
      e.preventDefault();
      if (this.state.fromDate && this.state.toDate) {
        this.props.searchAllTasksDash()
    } else {
        alert("You must complete all fields")
    }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleClickDash(id){
      this.props.searchTasksRecruits(id)
    }


  render() {
    const { allTasks, allRecruits, allDisciplines, allUsers, usersTasks, allTasksDash, tasksRecruit } = this.props;
    if (!this.props.user.name) {
      return <Redirect to={{pathname: "/login"}}/>
    }
    return (
      <div class="parent">
        <div class="div1">
          <SidebarContainer path={this.props.match} />
        </div>
        <div class="div2">
          <Dashboard allTasks={allTasks} />
          <Graphics usersTasks={usersTasks} handleSubmit2={this.handleSubmit2} allTasksDash={allTasksDash} idUser={this.props.match.params.userId} allTasks={allTasks} allRecruits={allRecruits} handleSubmit={this.handleSubmit} allDisciplines={allDisciplines} allUsers={allUsers} handleChange={this.handleChange} state={this.state}/>
          <DashboardRows allTasks={allTasks} />
          <Progress allTasks={allTasks} allRecruits={allRecruits} handleClickDash={this.handleClickDash} tasksRecruit={tasksRecruit}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  allTasks: state.task.allTasks,
  allRecruits: state.recruit.recruits,
  allDisciplines: state.disciplines.disciplines,
  allUsers: state.user.users,
  usersTasks: state.task.tasks,
  allTasksDash: state.task.allTasksDash,
  user: state.login.user,
  tasksRecruit:state.task.tasksRecruit,
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    searchAllTasks: () => dispatch(searchAllTasks()),
    searchRecruits: () => dispatch(searchRecruits()),
    searchDisciplines: () => dispatch(searchDisciplines()),
    fetchUsers: () => dispatch(fetchUsers()),
    searchTasks: (userId) => dispatch(searchTasks(userId)),
    searchAllTasksDash: () => dispatch(searchAllTasksDash()),
    searchTasksRecruits: (id) => dispatch(searchTasksRecruits(id))
  }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardContainer));
