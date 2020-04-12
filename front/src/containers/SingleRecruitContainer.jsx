import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import SingleRecruit from "../components/SingleRecruit";
import { searchTasksRecruits, deleteTaskRecruit } from "../redux/actions/tasks"
import { searchSingleRecruit } from "../redux/actions/recruits"

class SingleRecruitContainer extends React.Component {
    constructor() {
        super()
        this.handlerClick = this.handlerClick.bind(this)
    }

    componentDidMount() {
        const recruitId = this.props.match.params.recruitId
        this.props.searchSingleRecruit(recruitId)
        this.props.searchTasksRecruits(recruitId)
    }

    handlerClick(taskRecruitId){
        let recruitId = this.props.match.params.recruitId
        this.props.deleteTaskRecruit(taskRecruitId, recruitId)
    }

    render() {
        if(!this.props.user.isAdmin && this.props.user.name){
            return <Redirect to={{pathname: "/home"}}/>
        } else if (!this.props.user.name) {
            return <Redirect to={{pathname: "/login"}}/>
        }
        return (
            <div>
                <SingleRecruit recruit={this.props.recruit} tasks={this.props.tasks} handlerClick={this.handlerClick}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.login.user,
        recruit: state.recruit.selectedRecruit,
        tasks: state.task.tasksRecruit
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchSingleRecruit: (recruit) => dispatch(searchSingleRecruit(recruit)),
        searchTasksRecruits: (recruitId) => dispatch(searchTasksRecruits(recruitId)),
        deleteTaskRecruit: (taskRecruitId, recruitId) => dispatch(deleteTaskRecruit(taskRecruitId, recruitId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleRecruitContainer))