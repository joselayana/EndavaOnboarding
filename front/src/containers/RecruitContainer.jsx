import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { searchRecruits } from "../redux/actions/recruits"
import SidebarContainer from "../containers/SidebarContainer";


import Recruit from "../components/Recruit";

class RecruitContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            busqueda: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
    }

    componentDidMount() {
        this.props.searchRecruits()
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSearchInput(e) {
        this.setState({ busqueda: e.target.value })
        const busqueda = e.target.value
        busqueda.length >= 2 ? this.props.searchRecruits(busqueda)
            : this.props.searchRecruits()

    }

    render() {
        if(!this.props.user.isAdmin && this.props.user.name){
            return <Redirect to={{pathname: `/dashboard/${this.props.user.id}`}}/>
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
                        <Recruit recruits={this.props.recruits} handleSearchInput={this.handleSearchInput} handleChange={this.handleChange} state={this.state} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.login.user,
        recruits: state.recruit.recruits
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchRecruits: (busqueda) => dispatch(searchRecruits(busqueda))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecruitContainer))