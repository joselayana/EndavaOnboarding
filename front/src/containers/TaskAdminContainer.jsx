import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import TaskAdmin from "../components/TasksAdmin";
import { createTask, searchTasks, searchAllTasks, searchTasksList, updateTaskState } from "../redux/actions/tasks"


class TasksAdminContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            description: "",
            taskState: "",
            busqueda: "",
            busquedaS: "",
            busquedaT: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
        // this.handleSearchAllInputS = this.handleSearchAllInputS.bind(this);
        // this.handleSearchAllInputT = this.handleSearchAllInputT.bind(this);
        this.handleSearchAllPendingInputS = this.handleSearchAllPendingInputS.bind(this);
        this.handleSearchAllPendingInputT = this.handleSearchAllPendingInputT.bind(this);
        this.handleSearchAllFinishedInputS = this.handleSearchAllFinishedInputS.bind(this);
        this.handleSearchAllFinishedInputT = this.handleSearchAllFinishedInputT.bind(this);
        this.clearState = this.clearState.bind(this)
    }

    componentDidMount() {
        const userId = this.props.match.params.userId
        this.props.searchTasks(userId)
        this.props.searchAllTasks()
        this.props.searchTasksList()
    }

    handleSubmit(e) {
        e.preventDefault();
        let obj = { description: e.target[0].value }
        this.props.createTask(obj)
            .then(() => this.setState({ description: '' }))
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSearchInput(e) {
        const userId = this.props.match.params.userId
        this.setState({ busqueda: e.target.value })
        const busqueda = e.target.value
        busqueda.length >= 2 ? this.props.searchTasks(userId, busqueda)
            : this.props.searchTasks(userId)

    }

    // handleSearchAllInputS (e) {
    //     this.setState({busquedaS : e.target.value})
    //     const busqueda = e.target.value
    //     busqueda.length >=2? this.props.searchAllTasks(busqueda, 1)
    //     : this.props.searchAllTasks()

    // }

    // handleSearchAllInputT (e) {
    //     this.setState({busquedaT : e.target.value})
    //     const busqueda = e.target.value
    //     busqueda.length >=2? this.props.searchAllTasks(busqueda, 2)
    //     : this.props.searchAllTasks()
    // }

    clearState(e) {
        this.setState({ busquedaS: "", busquedaT: "" })
        this.props.searchAllTasks()
    }

    handleSearchAllPendingInputS(e) {
        this.setState({ busquedaS: e.target.value })
        const busqueda = e.target.value
        busqueda.length >= 2 ? this.props.searchAllTasks(busqueda, 1)
            : this.props.searchAllTasks()
    }

    handleSearchAllPendingInputT(e) {
        this.setState({ busquedaT: e.target.value })
        const busqueda = e.target.value
        busqueda.length >= 2 ? this.props.searchAllTasks(busqueda, 2)
            : this.props.searchAllTasks()
    }

    handleSearchAllFinishedInputS(e) {
        this.setState({ busquedaS: e.target.value })
        const busqueda = e.target.value
        busqueda.length >= 2 ? this.props.searchAllTasks(busqueda, 1)
            : this.props.searchAllTasks()
    }

    handleSearchAllFinishedInputT(e) {
        this.setState({ busquedaT: e.target.value })
        const busqueda = e.target.value
        busqueda.length >= 2 ? this.props.searchAllTasks(busqueda, 2)
            : this.props.searchAllTasks()
    }

    handleClick(taskId) {
        let obj = { taskState: this.state.taskState, taskId: taskId, userId: this.props.user.id }
        if (this.state.taskState) {
            this.props.updateTaskState(obj)
        }
    }

    render() {
        return (
            <Fragment>

                <TaskAdmin clearState={this.clearState} user={this.props.user} handleSearchInput={this.handleSearchInput} handleSearchAllPendingInputS={this.handleSearchAllPendingInputS} handleSearchAllPendingInputT={this.handleSearchAllPendingInputT} handleSearchAllFinishedInputS={this.handleSearchAllFinishedInputS} handleSearchAllFinishedInputT={this.handleSearchAllFinishedInputT} handleSubmit={this.handleSubmit} handleChange={this.handleChange} handleClick={this.handleClick} state={this.state} tasks={this.props.tasks} allTasks={this.props.allTasks} tasksList={this.props.tasksList} />

            </Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.login.user,
        tasks: state.task.tasks,
        allTasks: state.task.allTasks,
        tasksList: state.task.tasksList
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createTask: (task) => dispatch(createTask(task)),
        searchTasks: (userId, busqueda) => dispatch(searchTasks(userId, busqueda)),
        searchAllTasks: (busqueda, valor) => dispatch(searchAllTasks(busqueda, valor)),
        searchTasksList: () => dispatch(searchTasksList()),
        updateTaskState: (taskState) => dispatch(updateTaskState(taskState))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TasksAdminContainer))


