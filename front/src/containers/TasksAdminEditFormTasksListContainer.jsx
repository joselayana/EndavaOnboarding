import React, { Fragment } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import TasksAdminEditFormTasksList from "../components/TasksAdminEditFormTasksList"
import { deleteTask, changeTask } from "../redux/actions/tasks"

class TasksAdminEditFormTasksListContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            description: ""
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {




    }

    handleDelete() {
        this.props.deleteTask(this.props.match.params.taskId)
            .then(
                this.props.history.push(`/myTasks/${this.props.user.id}`)
            )
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault()
        let newDescription = this.state.description
        let obj = { taskId: this.props.match.params.taskId, description: newDescription }
        this.props.changeTask(obj)
            .then(this.props.history.push(`/myTasks/${this.props.user.id}`))


    }




    render() {
        return (
            <Fragment>
                <TasksAdminEditFormTasksList handleSubmit={this.handleSubmit} state={this.state} handleChange={this.handleChange} handleDelete={this.handleDelete} taskListId={this.props.match.params.taskId} tasksList={this.props.tasksList} allTasks={this.props.allTasks} />
            </Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        tasksList: state.task.tasksList,
        allTasks: state.task.allTasks,
        user: state.login.user
    }

}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteTask: (taskId) => dispatch(deleteTask(taskId)),
        changeTask: (obj) => dispatch(changeTask(obj))
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TasksAdminEditFormTasksListContainer))