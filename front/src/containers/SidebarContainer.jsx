import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Sidebar from "../components/Sidebar";



class sideContainer extends React.Component {
    constructor() {
        super()

    }
    render() {
        return (

            <Fragment>
                <Sidebar />
            </Fragment>

        )



    }

}
export default withRouter(connect(null, null)(sideContainer))