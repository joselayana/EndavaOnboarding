import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import "../css/style.css"

export default ({ handleSubmit, handleSearchInput, handleChange, state, tasks, handleClick, allTasks, tasksList, user }) => {

  let indice = 0
  let indice2 = 0
  let indice3 = 0
  let indice4 = 0
  return (
    <Fragment>
      {(user.id) ? (
        <div style={{ padding: "3%" }}>
          <>
            {(user.isAdmin) ? (
              <>
                <p>
                  <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Add a new task  </button>
                </p>
                <div className="collapse" id="collapseExample">
                  <p>As a ADMIN, in this section, you can add a new task to the list of available tasks.
                 <button type="button" className=" btn btn-link " data-toggle="modal" data-target="#tasksList">
                      See the available tasks.
                 </button>
                  </p>
                  {/* -- Modal task form -- */}
                  <div className="modal fade" id="tasksList" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLongTitle">List of available tasks</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <table className="table table-striped">
                            <thead>
                              <tr className="table1">
                                <th scope="col">#</th>
                                <th scope="col">Task</th>
                              </tr>
                            </thead>
                            <tbody>
                              {tasksList.map((task) => {
                                return (
                                  <tr key={task.id}>
                                    <th scope="row" className="align-middle">{++indice3}</th>
                                    <td className="align-middle">{task.description} </td>
                                  </tr>
                                )
                              })}
                            </tbody>
                          </table>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="container box_container2">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Description</label>
                        <textarea onChange={handleChange} value={state.description} name="description" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                      <button className="btn btn-info btn-block mb-2" style={{ backgroundColor: "#1d57a8", borderColor: "#1d57a8" }}>Create Task</button>

                    </form>
                  </div>
                </div>
              </>
            ) : (
                null
              )}
          </>
          <br />
          <h1 className="titleSection">My Tasks</h1>
          <br />
          <div>
            <div className="container box_container2 margen">
              <form class="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2 ">
                <input class="form-control form-control-sm mr-3 ancho" type="text" placeholder="Search for recruits" onChange={handleSearchInput}
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
                    <th scope="col">New hired</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">State</th>
                    <th scope="col">New State</th>
                    <th scope="col">Comments</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task) => {
                    let fechaArray = task.dueDate.split("-")
                    let fechaOrdenada = fechaArray.reverse()
                    let dueDate = fechaOrdenada.join("/")
                    return (
                      <>
                        {(task.state != "finished") ? (
                          <>
                            <tr key={task.id}>
                              <th scope="row" className="align-middle">{++indice}</th>
                              <td className="align-middle"><Link style={{ color: "#285078" }} to={`/task/${task.id}`} >{task.task.description}</Link></td>
                              <td className="align-middle">{task.recruit.name} {task.recruit.lastName}</td>
                              <td className="align-middle">{dueDate}</td>
                              <>
                                {(task.state == "blocked out") ? (
                                  <td className="align-middle" style={{ color: "red" }}  >{task.state}</td>
                                ) : (
                                    <td className="align-middle"   >{task.state}</td>
                                  )
                                }
                              </>
                              <td className="align-middle">
                                <div className="form-group input-group">
                                  <select onChange={handleChange} selected="" name="taskState" className="form-control border1">
                                    <option className="border1">Current State</option>
                                    <option className="border1">pending</option>
                                    <option className="border1">started</option>
                                    <option className="border1">blocked out</option>
                                    <option className="border1">finished</option>
                                  </select>
                                  {/*<button onClick={handleClick} style={{display:"inline-block"}}><i className="far fa-save"></i></button>*/}
                                </div>
                              </td>
                              <td className="align-middle">{task.comment}</td>
                            </tr>
                          </>
                        ) : (
                            null
                          )}
                      </>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <br />
          <br />
          <h1>My Accomplished Tasks</h1>
          <br />
          <div>
            <div className="container box_container2">
              <table className="table table-striped">
                <thead>
                  <tr className="table1">
                    <th scope="col">#</th>
                    <th scope="col">Task</th>
                    <th scope="col">New hired</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">End date</th>
                    <th scope="col">Comments</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task) => {
                    let fechaArray = task.dueDate.split("-")
                    let fechaOrdenada = fechaArray.reverse()
                    let dueDate = fechaOrdenada.join("/")
                    return (
                      <>
                        {(task.state == "finished") ? (
                          <>
                            <tr key={task.id}>
                              <th scope="row" className="align-middle">{++indice4}</th>
                              <td className="align-middle"><Link style={{ color: "#1d57a8" }} to={`/task/${task.id}`} >{task.task.description}</Link></td>
                              <td className="align-middle">{task.recruit.name} {task.recruit.lastName}</td>
                              <td className="align-middle">{dueDate}</td>
                              <td className="align-middle">{task.finishDate}</td>
                              {/* <td className="align-middle">{task.state}</td> */}
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
          <>
            {(user.isAdmin) ? (
              <>
                <br />
                <h1>All Tasks</h1>
                <br />
                <div>
                  <div className="container box_container2">
                    <table className="table table-striped">
                      <thead>
                        <tr className="table1">
                          <th scope="col">#</th>
                          <th scope="col">Task</th>
                          <th scope="col">New hired</th>
                          <th scope="col">Task owner</th>
                          <th scope="col">Due Date</th>
                          <th scope="col">State</th>
                          <th scope="col">Comments</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allTasks.map((task) => {
                          let fechaArray = task.dueDate.split("-")
                          let fechaOrdenada = fechaArray.reverse()
                          let dueDate = fechaOrdenada.join("/")
                          return (
                            <tr key={task.id}>
                              <th scope="row" className="align-middle">{++indice2}</th>
                              <td className="align-middle"><Link style={{ color: "#1d57a8" }} to={`/task/${task.id}`} >{task.task.description}</Link></td>
                              <td className="align-middle">{task.recruit.name} {task.recruit.lastName}</td>
                              <td className="align-middle">{task.user.name} {task.user.lastName}</td>
                              <td className="align-middle">{dueDate}</td>
                              <>
                                {(task.state == "blocked out") ? (
                                  <td className="align-middle" style={{ color: "red" }}  >{task.state}</td>
                                ) : (
                                    <td className="align-middle"   >{task.state}</td>
                                  )
                                }
                              </>
                              {/* <td className="align-middle">{task.state}</td> */}
                              <td className="align-middle">{task.comment}</td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            ) : (
                null
              )
            }
          </>
        </div>
      ) : (
          null
        )
      }
    </Fragment >
  )
}
