import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Sidebar from "../components/Sidebar";



class sidebarContainer extends React.Component {
    constructor() {
        super()

    }

    render() {
        console.log("yoooooooooooo", this.props)
        return (

            <Fragment>
                <Sidebar user={this.props.user} />
            </Fragment>

        )



    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.login.user
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

};




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(sidebarContainer))