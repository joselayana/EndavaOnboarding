import React, { Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

import SidebarContainer from "../containers/SidebarContainer"
import MyFinishedTasks from "../components/MyFinishedTasks";
import { searchTasks } from "../redux/actions/tasks";



class MyFinishedTasksContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            busqueda: ""
        }
        this.handleSearchInput = this.handleSearchInput.bind(this)
    }
    componentDidMount() {
        const userId = this.props.match.params.userId
        this.props.searchTasks(userId)
    }

    handleSearchInput(e) {
        const userId = this.props.match.params.userId
        this.setState({ busqueda: e.target.value })
        const busqueda = e.target.value;
        (busqueda.length >= 2) ? this.props.searchTasks(userId, busqueda) : this.props.searchTasks(userId)

    }

    render() {
        if (!this.props.user.name) {
            return <Redirect to={{ pathname: "/login" }} />
        }
        return (
            <Fragment>
                <div class="parent">
                    <div class="div1">
                        <SidebarContainer path={this.props.match} />
                    </div>
                    <div class="div2">
                        <MyFinishedTasks user={this.props.user} tasks={this.props.tasks} handleSearchInput={this.handleSearchInput} />
                    </div>
                </div>
            </Fragment>








        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.login.user,
        tasks: state.task.tasks
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchTasks: (userId, busqueda) => { dispatch(searchTasks(userId, busqueda)) }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyFinishedTasksContainer))