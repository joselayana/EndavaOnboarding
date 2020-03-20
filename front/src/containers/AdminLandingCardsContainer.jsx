import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import AdminLandingCards from "../components/AdminLandingCards";

class AdminLandingCardsContainer extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <AdminLandingCards />
            </div>
        )
    }
}

export default AdminLandingCardsContainer;