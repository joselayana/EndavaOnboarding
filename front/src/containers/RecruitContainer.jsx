import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { searchRecruits } from "../redux/actions/recruits"

import Recruit from "../components/Recruit";

class RecruitContainer extends React.Component {
    constructor() {
        super()
    }

    componentDidMount() {
        this.props.searchRecruits()
    }

    render() {
        return (
            <div>
                <Recruit recruits={this.props.recruits}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        recruits: state.recruit.recruits
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchRecruits: () => dispatch(searchRecruits())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecruitContainer))