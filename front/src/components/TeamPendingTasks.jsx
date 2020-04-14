import React, { Fragment } from "react";
import { Link } from "react-router-dom"


export default ({ handleSearchInputS, handleSearchInputT, allTasks, user }) => {
    let indice = 0
    return (
        <Fragment>
            <div class="card-body rgba-black-light white-text z-depth-1">
                <div>
                    <div className="container box_container2 margen">
                        <form class="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2 ">
                            <input class="form-control form-control-sm mr-3 ancho" type="text" placeholder="Search for New Hires" onChange={handleSearchInputS}
                                aria-label="Search" />
                            <i class="fas fa-search searchColor" aria-hidden="true"></i>
                        </form>
                        <form class="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2 ">
                            <input class="form-control form-control-sm mr-3 ancho" type="text" placeholder="Search for Task Owners" onChange={handleSearchInputT}
                                aria-label="Search" />
                            <i class="fas fa-search searchColor" aria-hidden="true"></i>
                        </form>
                    </div>
                    <div className="container box_container2">
                        <table className="table table-striped">
                            <thead>
                                <tr className="table1">
                                    <th scope="col">#</th>
                                    <th scope="col"></th>
                                    <th scope="col">Task</th>
                                    <th scope="col">New Hire</th>
                                    <th scope="col">Task owner</th>
                                    <th scope="col">Due Date</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allTasks.map((task) => {
                                    let today = new Date();
                                    let due = new Date(task.dueDate);
                                    let color = ""
                                    if (due > today) {
                                        var diffTime = Math.abs(due - today);
                                        var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                                        (diffDays <= 3) ? color = "amarillo" : color = "verde";
                                    } else {
                                        color = "rojo"
                                    }
                                    return (
                                        <>
                                            {(task.state != "finished") ? (
                                                <tr key={task.id}>
                                                    <th scope="row" className="align-middle">{++indice}</th>
                                                    <> {(color === "rojo") ? (<td style={{ color: "red" }} className="align-middle"><i class="fas fa-circle"></i></td>) : null}</>
                                                    <> {(color === "amarillo") ? (<td style={{ color: "yellow" }} className="align-middle"><i class="fas fa-circle"></i></td>) : null}</>
                                                    <> {(color === "verde") ? (<td style={{ color: "green" }} className="align-middle"><i class="fas fa-circle"></i></td>) : null}</>
                                                    <td className="align-middle"><Link style={{ color: "#1d57a8" }} to={`/task/${task.id}`} >{task.task.description}</Link></td>
                                                    <td className="align-middle">{task.recruit.name} {task.recruit.lastName}</td>
                                                    <td className="align-middle">{task.user.name} {task.user.lastName}</td>
                                                    <td className="align-middle">{task.dueDate.split("-").reverse().join("/")}</td>
                                                    <>
                                                        {(task.state == "blocked out") ? (
                                                            <td className="align-middle" style={{ color: "red" }}  >{task.state}</td>
                                                        ) : (
                                                                <td className="align-middle"   >{task.state}</td>
                                                            )
                                                        }
                                                    </>
                                                    <td className="align-middle">{task.comment}</td>
                                                </tr>
                                            ) : (null)}
                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}