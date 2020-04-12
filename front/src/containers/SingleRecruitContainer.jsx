import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import SingleRecruit from "../components/SingleRecruit";
import { searchTasksRecruits, deleteTaskRecruit } from "../redux/actions/tasks"
import { searchSingleRecruit, deleteRecruit } from "../redux/actions/recruits"
import SidebarContainer from "../containers/SidebarContainer";

class SingleRecruitContainer extends React.Component {
    constructor() {
        super()
        this.handlerClick = this.handlerClick.bind(this)
        this.handleDeleteRecruit = this.handleDeleteRecruit.bind(this)
    }

    componentDidMount() {
        const recruitId = this.props.match.params.recruitId
        this.props.searchSingleRecruit(recruitId)
        this.props.searchTasksRecruits(recruitId)
    }

    handlerClick(taskRecruitId) {
        let recruitId = this.props.match.params.recruitId
        this.props.deleteTaskRecruit(taskRecruitId, recruitId)
    }

    handleDeleteRecruit(recruitId) {
        this.props.deleteRecruit(recruitId)
            .then(this.props.history.push("/recruits"))

    }

    render() {
        if(!this.props.user.isAdmin && this.props.user.name){
            return <Redirect to={{pathname: "/home"}}/>
        } else if (!this.props.user.name) {
            return <Redirect to={{pathname: "/login"}}/>
        }
        return (
            <div>
                <div class="parent">
                    <div class="div1">
                        <SidebarContainer path={this.props.match} />
                    </div>
                    <div class="div2">
                        <SingleRecruit recruit={this.props.recruit} tasks={this.props.tasks} handlerClick={this.handlerClick} handleDeleteRecruit={this.handleDeleteRecruit} />
                    </div>
                </div>
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
        deleteTaskRecruit: (taskRecruitId, recruitId) => dispatch(deleteTaskRecruit(taskRecruitId, recruitId)),
        deleteRecruit: (recruitId) => dispatch(deleteRecruit(recruitId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleRecruitContainer))