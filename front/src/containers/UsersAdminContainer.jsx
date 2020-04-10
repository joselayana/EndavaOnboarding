import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connet, connect } from "react-redux";
import UsersAdmin from "../components/UsersAdmin";
import { fetchUsers, changeProfile } from "../redux/actions/users"
import SidebarContainer from "../containers/SidebarContainer";


class UsersAdminContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            busqueda: ""
        }
        this.handleProfile = this.handleProfile.bind(this)
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.redirection = this.redirection.bind(this)

    }
    componentDidMount() {
        this.props.fetchUsers()

    }
    handleProfile(idUser, profile) {
        this.props.changeProfile(idUser, profile)

    }

    handleSearchInput(e) {
        this.setState({ busqueda: e.target.value })
        const busqueda = e.target.value
        busqueda.length >= 2 ? this.props.fetchUsers(busqueda)
            : this.props.fetchUsers()

    }

    redirection(userId) {
        this.props.history.push(`/deleteUser/${userId}`)
    }


    render() {
        return (
            <Fragment>
                <div class="parent">
                    <div class="div1">
                        <SidebarContainer />
                    </div>
                    <div class="div2">
                        <UsersAdmin users={this.props.users} redirection={this.redirection} handleProfile={this.handleProfile} handleSearchInput={this.handleSearchInput} />
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.user.users,
    }

};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchUsers: (busqueda) => dispatch(fetchUsers(busqueda)),
        changeProfile: (idUser, profile) => dispatch(changeProfile(idUser, profile))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersAdminContainer))
