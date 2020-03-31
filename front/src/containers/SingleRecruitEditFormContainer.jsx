import React, { Fragment } from "react";
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { updateRecruit } from "../redux/actions/recruits"


import SingleRecruitEditForm from "../components/SingleRecruitEditForm"


class SingleRecruitEditFormContainer extends React.Component {
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
        let viejoIdDiscipline = this.props.recruit.disciplineId
        let IdDiscipline;
        let newName;
        let newLastName;
        let newEmail;
        let newPhone;
        let newDNI;
        let newEntryDate;
        const recruitId = this.props.match.params.recruitId

        this.state.name ? (newName = this.state.name) : (newName = this.props.recruit.name)
        this.state.lastName ? (newLastName = this.state.lastName) : (newLastName = this.props.recruit.lastName)
        this.state.email ? (newEmail = this.state.email) : (newEmail = this.props.recruit.email)
        this.state.phone ? (newPhone = this.state.phone) : (newPhone = this.props.recruit.phone)
        this.state.DNI ? (newnewDNIName = this.state.DNI) : (newDNI = this.props.recruit.DNI)
        this.state.entryDate ? (newEntryDate = this.state.entryDate) : (newEntryDate = this.props.recruit.entryDate)

        if(this.state.discipline === "Development") IdDiscipline=1
        if(this.state.discipline === "Project Manager") IdDiscipline=2
        if(this.state.discipline === "Testing") IdDiscipline=3
        if(this.state.discipline === "Pdrc") IdDiscipline=4
        if(!this.state.discipline) IdDiscipline=viejoIdDiscipline

        let obj = { name: newName, lastName:newLastName , email: newEmail, phone: newPhone, DNI:newDNI, entryDate: newEntryDate , userId:this.props.user.id, disciplineId: IdDiscipline, recruitId:recruitId }
        this.props.updateRecruit(obj)
            .then(() => this.props.history.push(`/recruit/${recruitId}`))
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value });
    }

    render() {
        return (
            <Fragment>
                <SingleRecruitEditForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} recruit={this.props.recruit}/>
            </Fragment>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        recruit: state.recruit.selectedRecruit,
        user: state.login.user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateRecruit: (recruit) => dispatch(updateRecruit(recruit))
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleRecruitEditFormContainer))