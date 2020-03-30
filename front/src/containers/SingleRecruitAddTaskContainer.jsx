import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/actions/users"
import SingleRecruitAddTask from "../components/SingleRecruitAddTask";
import { searchTasksList, createTaskRecruit, setErrorFields, searchTasksRecruits } from "../redux/actions/tasks"


class SingleRecruitAddTaskContainer extends React.Component {
    constructor() {
        super()
        this.state={
            taskDescription: "",
            responsable: "",
            dueDate: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.fetchUsers()
        this.props.searchTasksList()
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.state.taskDescription && this.state.responsable && this.state.dueDate){
            //this.props.setErrorFields()
            let idUser;
            let idTask;
            this.props.userOptions.map((user) =>(this.state.responsable.includes(user.name && user.lastName)) ? (idUser = user.id) : null)
            this.props.taskOptions.map((task) =>(this.state.taskDescription == task.description) ? (idTask = task.id) : null)
            let obj = {taskId: idTask, responsableId: idUser, dueDate: this.state.dueDate, recruitId: this.props.match.params.recruitId}
            this.props.createTaskRecruit(obj)
            this.state.taskDescription = "" 
            this.state.responsable = "" 
            this.state.dueDate = ""
            
        } else{
            // const recruitId = this.props.match.params.recruitId
            // //this.props.setErrorFields()
            // this.props.searchTasksRecruits(recruitId)
        }
    }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <SingleRecruitAddTask taskOptions={this.props.taskOptions} userOptions={this.props.userOptions} handleSubmit={this.handleSubmit} handleChange={this.handleChange} state={this.state} newTasks={this.props.newTasks}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        taskOptions: state.task.tasksList,
        userOptions: state.user.users,
        newTasks: state.task.newTasks
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        searchTasksList: () => dispatch(searchTasksList()),
        searchTasksRecruits: (id) => dispatch(searchTasksRecruits(id)),
        createTaskRecruit: (obj) => dispatch(createTaskRecruit(obj)),
        setErrorFields: () => dispatch(setErrorFields())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleRecruitAddTaskContainer))