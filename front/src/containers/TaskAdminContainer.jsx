import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import TaskAdmin from "../components/TasksAdmin";
import { createTask } from "../redux/actions/tasks"


class TasksAdminContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            description: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let obj = { description: e.target[0].value }
        this.props.createTask(obj)
    }

    handleChange(e) {
        this.setState({ description: e.target.value });
    }

    render() {
        return (
            <Fragment>
                <TaskAdmin handleSubmit={this.handleSubmit} handleChange={this.handleChange} state={this.state} />
            </Fragment>
        )
    }
}

// const mapStateToProps = (state, ownProps) => {

// }

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createTask: (task) => dispatch(createTask(task))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(TasksAdminContainer))


