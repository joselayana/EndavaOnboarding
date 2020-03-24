import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import BannerRegister from "../components/BannerRegister";


class BannerRegisterContainer extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <BannerRegister/>
            </div>
        )
    }
}


export default BannerRegisterContainer
