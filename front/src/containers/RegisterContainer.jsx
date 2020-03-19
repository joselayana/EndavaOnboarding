import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Register from "../components/Register";

class RegisterContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            lastName: "",
            email: "",
            dicipline: "",
            password1: "",
            password2: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)

    }

    handleSubmit(e) {
        e.preventDefault();
        let flagMail = false
        let flagPassword = false
        if (e.target[2].value.includes("@endava.com")) flagMail = true
        if (e.target[4].value === e.target[5].value) flagPassword = true
        if (flagMail === true && flagPassword === true) {
            let obj = { email: e.target[0].value, password: e.target[1].value }
            this.props.crearUsuario(obj)
        }
    }



    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }




    render() {
        return (
            <div>
                <Register />
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        crearUsuario: (usuario) => dispatch(crearUsuario(usuario))
    }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterContainer))
