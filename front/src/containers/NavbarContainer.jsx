import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import { createUser } from "../redux/actions/users"

class NavbarContainer extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Navbar/>
            </div>
        )
    }
}


export default NavbarContainer
