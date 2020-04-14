import React, { Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom"

import TeamFinishedTasks from "../components/TeamFinishedTasks"
import SidebarContainer from "./SidebarContainer"

import { searchAllTasks } from "../redux/actions/tasks"


class TeamFinishedTasksContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            busquedaS: "",
            busquedaT: ""
        }
        this.handleSearchInputS = this.handleSearchInputS.bind(this);
        this.handleSearchInputT = this.handleSearchInputT.bind(this);
    }
    componentDidMount() {
        this.props.searchAllTasks()
    }

    handleSearchInputS(e) {
        this.setState({ busquedaS: e.target.value })
        const busqueda = e.target.value;
        (busqueda.length >= 2) ? this.props.searchAllTasks(busqueda, 1) : this.props.searchAllTasks()
    }

    handleSearchInputT(e) {
        this.setState({ busquedaT: e.target.value })
        const busqueda = e.target.value;
        (busqueda.length >= 2) ? this.props.searchAllTasks(busqueda, 2) : this.props.searchAllTasks()
    }





    render() {
        if (!this.props.user.isAdmin && this.props.user.name) {
            return <Redirect to={{ pathname: `/dashboard/${this.props.user.id}` }} />
        } else if (!this.props.user.name) {
            return <Redirect to={{ pathname: "/login" }} />
        }
        return (
            <Fragment>
                <div class="parent">
                    <div class="div1">
                        <SidebarContainer path={this.props.match} />
                    </div>
                    <div class="div2">
                        <TeamFinishedTasks allTasks={this.props.allTasks} handleSearchInputS={this.handleSearchInputS} handleSearchInputT={this.handleSearchInputT} />
                    </div>
                </div>
            </Fragment>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.login.user,
        allTasks: state.task.allTasks,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchAllTasks: (busqueda, valor) => dispatch(searchAllTasks(busqueda, valor)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamFinishedTasksContainer))

