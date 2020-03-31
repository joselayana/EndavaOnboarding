import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connet, connect } from "react-redux";
import UsersAdmin from "../components/UsersAdmin";
import { fetchUsers, changeProfile } from "../redux/actions/users"


class UsersAdminContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            busqueda:""
            // name: "",
            // lastName: "",
            // email: "",
            // dicipline: "",
            // password1: "",
            // password2: "",
            // errorMail: false,
            // errorPass: false,
            // errorInc: false,
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this)
        this.handleProfile = this.handleProfile.bind(this)
        this.handleSearchInput = this.handleSearchInput.bind(this);

    }
    componentDidMount() {
        this.props.fetchUsers()

    }
    handleProfile(idUser, profile) {
        this.props.changeProfile(idUser, profile)

    }

    handleSearchInput (e) {
        this.setState({busqueda : e.target.value})
        const busqueda = e.target.value
        busqueda.length >=2? this.props.fetchUsers(busqueda)
        : this.props.fetchUsers()
        
    }
    // handleSubmit(e) {
    //     e.preventDefault();
    //     let flagMail = false
    //     let flagPassword = false
    //     this.setState({ errorMail: false })
    //     this.setState({ errorPass: false })
    //     this.setState({ errorInc: false })
    //     if (e.target[0].value && e.target[1].value && e.target[2].value && e.target[3].value && e.target[4].value && e.target[5].value) {
    //         if (e.target[2].value.includes("@endava.com")) flagMail = true
    //         else this.setState({ errorMail: true })
    //         if (e.target[4].value === e.target[5].value) flagPassword = true
    //         else this.setState({ errorPass: true })
    //         if (flagMail === true && flagPassword === true) {
    //             let obj = { name: e.target[0].value, lastName: e.target[1].value, email: e.target[2].value, discipline: e.target[3].value, password: e.target[4].value }
    //             this.props.createUser(obj)
    //                 .then(() => this.props.history.push("/login"))
    //         }
    //     } else {
    //         this.setState({ errorInc: true })
    //     }
    // }
    // handleChange(e) {
    //     this.setState({ [e.target.name]: e.target.value });

    // }


    render() {
        return (
            <Fragment>
                <UsersAdmin users={this.props.users} handleProfile={this.handleProfile} handleSearchInput={this.handleSearchInput} />
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