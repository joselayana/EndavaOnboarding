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
            toDate: "",
            sortColBlocked: "task.description",
            sortTypesBlocked: (a, b) => a.task.description.toLowerCase().localeCompare(b.task.description.toLowerCase()),
            currentSortBlocked: 'down',
            sortColExpired: "task.description",
            sortTypesExpired: (a, b) => a.task.description.toLowerCase().localeCompare(b.task.description.toLowerCase()),
            currentSortExpired: 'down',
            sortColPending: "task.description",
            sortTypesPending: (a, b) => a.task.description.toLowerCase().localeCompare(b.task.description.toLowerCase()),
            currentSortPending: 'down',
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSubmit2 = this.handleSubmit2.bind(this)
        this.handleClickDash = this.handleClickDash.bind(this)
        this.onSortChange = this.onSortChange.bind(this);

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
    onSortChange(columna, tabla, isDate = false){
        if(tabla === "blocked"){
        if(!isDate){
            if(columna!==this.state.sortColBlocked){
                if(columna.includes(".")){
                    this.setState({sortColBlocked: columna});
                    this.setState({currentSortBlocked: "down"});
                    let columnaSplit = columna.split(".")
                    console.log(this.state.sortColBlocked, this.state.currentSortBlocked )
                    this.setState({sortTypesBlocked: (a, b) => a[columnaSplit[0]][columnaSplit[1]].toLowerCase().localeCompare(b[columnaSplit[0]][columnaSplit[1]].toLowerCase())});
                } else {
                let col = columna
                this.setState({sortColBlocked: columna});
                this.setState({currentSortBlocked: "down"});
                this.setState({sortTypesBlocked: (a, b) => a[col].toLowerCase().localeCompare(b[col].toLowerCase())});
                }
            }
            else{
            let nextSort;
            if (this.state.currentSortBlocked === 'down') nextSort = 'up';
            else if (this.state.currentSortBlocked === 'up') nextSort = 'down';
            this.setState({
              currentSortBlocked: nextSort
            });
            }
        } else {
            if(columna!==this.state.sortColBlocked){
                let col = columna
                this.setState({sortColBlocked: columna});
                this.setState({currentSortBlocked: "down"});
                this.setState({sortTypesBlocked: (a, b) => {
                    let aSpliteado = a[col].split("-")
                    let bSpliteado = b[col].split("-")
                    a = new Date(aSpliteado[0],aSpliteado[1],aSpliteado[2]);
                    b = new Date(bSpliteado[0],bSpliteado[1],bSpliteado[2]);
                    return a<b ? -1 : a>b ? 1 : 0;
                }})
            }
            else{
              let nextSort;
              if (this.state.currentSortBlocked === 'down') nextSort = 'up';
              else if (this.state.currentSortBlocked === 'up') nextSort = 'down';
              this.setState({
                currentSortBlocked: nextSort
              });
            }
        }
      } else if(tabla === "expired"){
        if(!isDate){
            if(columna!==this.state.sortColExpired){
                if(columna.includes(".")){
                    this.setState({sortColExpired: columna});
                    this.setState({currentSortExpired: "down"});
                    let columnaSplit = columna.split(".")
                    this.setState({sortTypesExpired: (a, b) => a[columnaSplit[0]][columnaSplit[1]].toLowerCase().localeCompare(b[columnaSplit[0]][columnaSplit[1]].toLowerCase())});
                } else {
                let col = columna
                this.setState({sortColExpired: columna});
                this.setState({currentSortExpired: "down"});
                this.setState({sortTypesExpired: (a, b) => a[col].toLowerCase().localeCompare(b[col].toLowerCase())});
                }
            }
            else{
            let nextSort;
            if (this.state.currentSortExpired === 'down') nextSort = 'up';
            else if (this.state.currentSortExpired === 'up') nextSort = 'down';
            this.setState({
              currentSortExpired: nextSort
            });
            }
        } else {
            if(columna!==this.state.sortColExpired){
                let col = columna
                this.setState({sortColExpired: columna});
                this.setState({tablaExpiredExpired, currentSort: "down"});
                this.setState({sortTypesExpired: (a, b) => {
                    let aSpliteado = a[col].split("-")
                    let bSpliteado = b[col].split("-")
                    a = new Date(aSpliteado[0],aSpliteado[1],aSpliteado[2]);
                    b = new Date(bSpliteado[0],bSpliteado[1],bSpliteado[2]);
                    return a<b ? -1 : a>b ? 1 : 0;
                }})
            }
            else{
              let nextSort;
              if (this.state.currentSortExpired === 'down') nextSort = 'up';
              else if (this.state.currentSortExpired === 'up') nextSort = 'down';
              this.setState({
                currentSortExpired: nextSort
              });
            }
        }
      } else if(tabla === "pending"){
        if(!isDate){
            if(columna!==this.state.sortColPending){
                if(columna.includes(".")){
                    this.setState({sortColPending: columna});
                    this.setState({currentSortPending: "down"});
                    let columnaSplit = columna.split(".")
                    this.setState({sortTypesPending: (a, b) => a[columnaSplit[0]][columnaSplit[1]].toLowerCase().localeCompare(b[columnaSplit[0]][columnaSplit[1]].toLowerCase())});
                } else {
                let col = columna
                this.setState({sortColPending: columna});
                this.setState({currentSortPending: "down"});
                this.setState({sortTypesPending: (a, b) => a[col].toLowerCase().localeCompare(b[col].toLowerCase())});
                }
            }
            else{
            let nextSort;
            if (this.state.currentSortPending === 'down') nextSort = 'up';
            else if (this.state.currentSortPending === 'up') nextSort = 'down';
            this.setState({
              currentSortPending: nextSort
            });
            }
        } else {
            if(columna!==this.state.sortColPending){
                let col = columna
                this.setState({sortColPending: columna});
                this.setState({currentSortPending: "down"});
                this.setState({sortTypesPending: (a, b) => {
                    let aSpliteado = a[col].split("-")
                    let bSpliteado = b[col].split("-")
                    a = new Date(aSpliteado[0],aSpliteado[1],aSpliteado[2]);
                    b = new Date(bSpliteado[0],bSpliteado[1],bSpliteado[2]);
                    return a<b ? -1 : a>b ? 1 : 0;
                }})
            }
            else{
              let nextSort;
              if (this.state.currentSortPending === 'down') nextSort = 'up';
              else if (this.state.currentSortPending === 'up') nextSort = 'down';
              this.setState({
                currentSortPending: nextSort
              });
            }
        }
      }
    };


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
          <Graphics usersTasks={usersTasks} handleSubmit2={this.handleSubmit2} allTasksDash={allTasksDash} idUser={this.props.match.params.userId} allTasks={allTasks} allRecruits={allRecruits} handleSubmit={this.handleSubmit} allDisciplines={allDisciplines} allUsers={allUsers} handleChange={this.handleChange} state={this.state} />
          <DashboardRows allTasks={allTasks} state={this.state} onSortChange={this.onSortChange}/>
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
