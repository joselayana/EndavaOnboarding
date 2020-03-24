import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import BannerWelcome from "../components/BannerWelcome";


class BannerWelcomeContainer extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <BannerWelcome/>
            </div>
        )
    }
}


export default BannerWelcomeContainer
