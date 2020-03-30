import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import SingleRecruit from "../components/SingleRecruit";
import { searchTasksRecruits } from "../redux/actions/tasks"
import { searchSingleRecruit } from "../redux/actions/recruits"

class SingleRecruitContainer extends React.Component {
    constructor() {
        super()
    }

    componentDidMount() {
        const recruitId = this.props.match.params.recruitId
        this.props.searchSingleRecruit(recruitId)
        console.log("A VERRR",recruitId)
        this.props.searchTasksRecruits(recruitId)
    }

    render() {
        return (
            <div>
                <SingleRecruit recruit={this.props.recruit} tasks={this.props.tasks}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        recruit: state.recruit.selectedRecruit,
        tasks: state.task.tasksRecruit
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchSingleRecruit: (recruit) => dispatch(searchSingleRecruit(recruit)),
        searchTasksRecruits: (recruitId) => dispatch(searchTasksRecruits(recruitId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleRecruitContainer))