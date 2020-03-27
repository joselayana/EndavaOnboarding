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
                <AdminLandingCards userId={this.props.user.id}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.login.user
    };
  };
  
export default connect(mapStateToProps, null)(AdminLandingCardsContainer)
