import React, { Fragment } from "react";
import { Link } from "react-router-dom"
import "../css/style.css"
import SingleRecruitAddTaskContainer from "../containers/SingleRecruitAddTaskContainer"



export default ({ recruit, tasks, handlerClick }) => {
    let indice = 0
    if (tasks) {
        return (
            <div style={{ padding: "3%" }}>
                <div className="container box_container2" >

                    <div className="accordion" id="accordionExample">
                        <div className="card">
                            <div className="card-header" id="headingOne">
                                <h2 className="mb-0">
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        {recruit.name} {recruit.lastName}'s Information
                                </button>
                                </h2>
                            </div>

                            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body">

                                    <section id="banner_white">
                                        <div className="container box_container">
                                            <div className="row">
                                                <div className="col-md-6" style={{ backgroundColor: "#f0f3f3" }}>
                                                    <div className="form-container">
                                                        <div className="card-body mx-auto">
                                                            <p className="card-title mt-3 text-center title">New Hire Information</p>
                                                            <p className="text-left subtitle">Name: {recruit.name} {recruit.lastName}</p>
                                                            <p className="text-left subtitle">Email: {recruit.email}</p>
                                                            <p className="text-left subtitle">Phone Number: {recruit.phone}</p>
                                                            <p className="text-left subtitle">DNI: {recruit.DNI}</p>
                                                            <p className="text-left subtitle">Entry date: {recruit.entryDate} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <div style={{ padding: "3%", display: "flex", justifyContent: "flex-end" }}>
                                        <Link to={`/recruit/edit/${recruit.id}`}><button type="button" className="btn btn-outline-primary" style={{ borderColor: "#1E5DAC" }} >Edit Information</button></Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingTwo">
                                <h2 className="mb-0">
                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Associated Tasks
                                </button>
                                </h2>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div className="card-body">

                                    {(tasks.length > 0 && typeof tasks[0] === 'object') ? (
                                        <>
                                            <SingleRecruitAddTaskContainer />
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr className="table1">
                                                        <th scope="col">#</th>
                                                        <th scope="col">Task</th>
                                                        <th scope="col">Responsable</th>
                                                        <th scope="col">Due Date</th>
                                                        <th scope="col">State</th>
                                                        <th scope="col">Coments</th>
                                                        <th scope="col">Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {tasks.map((task) => {
                                                        let fechaArray = task.dueDate.split("-")
                                                        let fechaOrdenada = fechaArray.reverse()
                                                        let dueDate = fechaOrdenada.join("/")
                                                        indice = indice + 1
                                                        return (
                                                            <tr key={task.id}>
                                                                <th scope="row" className="align-middle">{indice}</th>
                                                                <td className="align-middle">{task.task.description}</td>
                                                                <td className="align-middle">{task.user.name} {task.user.lastName}</td>
                                                                <td className="align-middle">{dueDate}</td>
                                                                <td className="align-middle">{task.state}</td>
                                                                <td className="align-middle">{task.comment}</td>
                                                                <td className="align-middle"><button type="button" class="btn btn-outline-danger" onClick={() => handlerClick(task.id)}><i className="far fa-trash-alt"></i></button></td>
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </table>

                                        </>
                                    ) : (
                                            <div style={{ padding: "3%" }}>
                                                <p>There's no tasks associated with this new hire</p>
                                                <p><Link to={`/recruit/addTask/${recruit.id}`}>Add taks here</Link></p>
                                            </div>
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    } else {
        return (
            <div class="spinner-border text-danger" role="status" style={{ marginTop: "20%", marginLeft: "50%" }}>
                <span class="sr-only">Loading...</span>
            </div>
        )
    }
}