import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Register from "../components/Register";

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






    render() {
        return (
            <div>
                <Register />
            </div>
        )
    }
}

export default RegisterContainer;
