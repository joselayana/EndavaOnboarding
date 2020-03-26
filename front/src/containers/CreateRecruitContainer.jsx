import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createRecruit } from "../redux/actions/recruits"
import CreateRecruit from "../components/CreateRecruit";

class CreateRecruitContainer extends React.Component {
    constructor() {
        super()
        this.state={
            name: "",
            lastName: "",
            email: "",
            phone: "",
            DNI: "",
            entryDate: "",
            discipline: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        let IdDiscipline;
        if(this.state.discipline === "Development") IdDiscipline=1
        if(this.state.discipline === "Project Manager") IdDiscipline=2
        if(this.state.discipline === "Testing") IdDiscipline=3
        if(this.state.discipline === "Pdrc") IdDiscipline=4
        let obj = { name: this.state.name, lastName: this.state.lastName, email: this.state.email, phone: this.state.phone, DNI:this.state.DNI, entryDate: this.state.entryDate, userId:this.props.user.id, disciplineId: IdDiscipline }
        this.props.createRecruit(obj)
            .then(() => this.props.history.push("/recruits"))
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <CreateRecruit handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.login.user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createRecruit: (recruit) => dispatch(createRecruit(recruit)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateRecruitContainer))
