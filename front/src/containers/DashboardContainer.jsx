import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";
import Graphics from "../components/Graphics";
import DashboardRows from "../components/DashboardRows";
import Progress from "../components/Progress";


class DashboardContainer extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Dashboard/>
                <Graphics/>
                <DashboardRows/>
                <Progress/>
            </div>
        )
    }
}


export default DashboardContainer
