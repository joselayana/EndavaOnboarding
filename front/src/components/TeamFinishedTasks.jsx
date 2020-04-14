import React, { Fragment } from "react";
import { Link } from "react-router-dom"


export default ({ handleSearchInputS, handleSearchInputT, allTasks }) => {
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
                                    <th scope="col">Task</th>
                                    <th scope="col">New Hire</th>
                                    <th scope="col">Task owner</th>
                                    <th scope="col">Due Date</th>
                                    <th scope="col">End date</th>
                                    <th scope="col">Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allTasks.map((task) => {
                                    return (
                                        <>
                                            {(task.state == "finished") ? (
                                                <>
                                                    <tr key={task.id}>
                                                        <th scope="row" className="align-middle">{++indice}</th>
                                                        <td className="align-middle"><Link style={{ color: "#1d57a8" }} to={`/task/${task.id}`} >{task.task.description}</Link></td>
                                                        <td className="align-middle">{task.recruit.name} {task.recruit.lastName}</td>
                                                        <td className="align-middle">{task.user.name} {task.user.lastName}</td>
                                                        <td className="align-middle">{task.dueDate.split("-").reverse().join("/")}</td>
                                                        <td className="align-middle">{task.finishDate.split("-").reverse().join("/")}</td>
                                                        <td className="align-middle">{task.comment}</td>
                                                    </tr>
                                                </>
                                            ) : (
                                                    null
                                                )
                                            }
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