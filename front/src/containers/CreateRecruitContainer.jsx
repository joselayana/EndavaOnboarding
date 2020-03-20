import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import CreateRecruit from "../components/CreateRecruit";

class CreateRecruitContainer extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <CreateRecruit />
            </div>
        )
    }
}

export default CreateRecruitContainer;
