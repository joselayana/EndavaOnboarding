import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/actions/users"
import SingleRecruitAddTask from "../components/SingleRecruitAddTask";
import { searchTasksList } from "../redux/actions/tasks"


class SingleRecruitAddTaskContainer extends React.Component {
    constructor() {
        super()
        this.state={
            taskDescription: "",
            responsable: "",
            dueDate: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.fetchUsers()
        this.props.searchTasksList()
    }

    handleSubmit(e){
        e.preventDefault();
        let user = this.state.responsable
        let arrayUser = user.split(" ")
        let name = arrayUser[0]
        let lastName = arrayUser[1]
        let obj = {taskDescription: this.state.taskDescription, responsable: this.state.responsable, dueDate: this.state.dueDate}
        
        //primero voy a ir a buscar con el nombre el id del usuario seleccionado

        //despues voy a ir con la description de la task y me voy a traer su id

        //por ultimo armo un objeto con idUser, idTask y idRecruit (que lo saco del props.match.params) y con eso voy a la base de datos y creo una nueva taskRecruit
        
        //el resultado de la ultima promesa deberia dispachear al store la taskrecruit creada para que despues se renderice en otro componente
        console.log("OBJETO", obj)
    }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <SingleRecruitAddTask taskOptions={this.props.taskOptions} userOptions={this.props.userOptions} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        taskOptions: state.task.tasksList,
        userOptions: state.user.users
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        searchTasksList: () => dispatch(searchTasksList())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleRecruitAddTaskContainer))