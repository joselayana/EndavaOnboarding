import React, { Fragment } from "react";
import { connect } from "react-redux"
import { withRouter, Redirect } from "react-router-dom"


import SingleTask from "../components/SingleTask"
import { searchSingleTaskRecruit } from "../redux/actions/tasks"


class SingleTaskContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            newComment: ""
        }
    }

    componentDidMount() {
        const taskId = this.props.match.params.taskId
        this.props.searchSingleTaskRecruit(taskId)

    }

    render() {
        if (!this.props.user.name) {
            return <Redirect to={{pathname: "/login"}}/>
        }
        return (
            <Fragment>
                <SingleTask selectedTask={this.props.selectedTask} user={this.props.user} />
            </Fragment>

        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        selectedTask: state.task.selectedTask,
        user: state.login.user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchSingleTaskRecruit: (taskId) => dispatch(searchSingleTaskRecruit(taskId))

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleTaskContainer))