import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Register from "../components/Register";
import { createUser } from "../redux/actions/users"

class RegisterContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            lastName: "",
            email: "",
            dicipline: "",
            password1: "",
            password2: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)

    }

    handleSubmit(e) {
        e.preventDefault();
        let flagMail = false
        let flagPassword = false
        if (e.target[2].value.includes("@endava.com")) flagMail = true
        if (e.target[4].value === e.target[5].value) flagPassword = true
        if (flagMail === true && flagPassword === true) {
            let obj = { name: e.target[0].value, lastName: e.target[1].value, email: e.target[2].value, discipline: e.target[3].value, password: e.target[4].value }
            this.props.createUser(obj)
                .then(() => this.props.history.push("/login"))
        }
    }



    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });

    }




    render() {
        return (
            <div>
                <Register handleSubmit={this.handleSubmit} handleChange={this.handleChange} state={this.state} />
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createUser: (usuario) => dispatch(createUser(usuario))
    }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterContainer))
