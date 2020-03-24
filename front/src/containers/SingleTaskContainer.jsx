import React, { Fragment } from "react";
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"


import SingleTask from "../components/SingleTask"
import { searchSingleTaskRecruit } from "../redux/actions/tasks"


class SingleTaskContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            newComment: ""
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleComment = this.
    }
    componentDidMount() {
        const taskId = this.props.match.params.taskId
        this.props.searchSingleTaskRecruit(taskId)

    }



    render() {
        return (
            <Fragment>
                <SingleTask selectedTask={this.props.selectedTask} />
            </Fragment>

        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        selectedTask: state.task.selectedTask
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchSingleTaskRecruit: (taskId) => dispatch(searchSingleTaskRecruit(taskId))

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleTaskContainer))