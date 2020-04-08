import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";
import Graphics from "../components/Graphics";
import DashboardRows from "../components/DashboardRows";
import Progress from "../components/Progress";


import {searchAllTasks} from "../redux/actions/tasks";
import {searchRecruits} from "../redux/actions/recruits"



class DashboardContainer extends React.Component {
    constructor() {
        super()

    }

    componentDidMount(){
      this.props.searchAllTasks()
      this.props.searchRecruits()
    }

    render() {

      const {allTasks,allRecruits}=this.props;

        return (
            <div>
                <Dashboard allTasks={allTasks}/>
                <Graphics allTasks={allTasks} />
                <DashboardRows allTasks={allTasks}/>
                <Progress allTasks={allTasks} allRecruits={allRecruits}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    allTasks: state.task.allTasks,
    allRecruits:state.recruit.recruits
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      searchAllTasks: ()=> dispatch(searchAllTasks()),
      searchRecruits: ()=> dispatch(searchRecruits())
    }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardContainer));
