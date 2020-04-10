import React from "react";
import "../css/style.css"
import "../css/style2.scss"
import { Link } from "react-router-dom"

export default ({allTasks}) =>{


 let indice=0;
 let indice1=0;
 let indice2=0;

  return(

    <div class="parentDashRow">

      <div class="div1DashRow">

        <div className="box_container3">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><i class="fas fa-lock"></i> &nbsp; BLOCKED</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"><i class="fas fa-hourglass-end"></i> &nbsp; EXPIRED</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false"><i class="fas fa-stopwatch"></i> &nbsp; PENDING</a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">


                <table className="table table-striped">
                  <thead>
                    <tr className="table1 redHead">
                      <th scope="col">#</th>
                      <th scope="col">Task</th>
                      <th scope="col">New Hire</th>
                      <th scope="col">Responsable</th>
                      <th scope="col">Due Date</th>
                      <th scope="col">Comments</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allTasks.map((task) => {
                      return (
                        <>
                          {(task.state === "blocked out") ? (
                            <>
                              <tr key={task.id}>
                                <th scope="row" className="align-middle">{++indice}</th>
                                <td className="align-middle"><Link style={{ color: "#285078" }} to={`/task/${task.id}`} >{task.task.description}</Link></td>
                                <td className="align-middle">{task.recruit.name} {task.recruit.lastName}</td>
                                <td className="align-middle">{task.user.name} {task.user.lastName}</td>
                                <td className="align-middle">{task.dueDate.split("-").reverse().join("/")}</td>
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
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">


              <table className="table table-striped">
                <thead>
                  <tr className="table1 orangeHead">
                    <th scope="col">#</th>
                    <th scope="col">Task</th>
                    <th scope="col">New Hire</th>
                    <th scope="col">Responsable</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Comments</th>
                  </tr>
                </thead>
                <tbody>
                  {allTasks.map((task) => {
                    return (
                      <>
                        {(new Date(task.dueDate) < new Date) ? (
                          <>
                            <tr key={task.id}>
                              <th scope="row" className="align-middle">{++indice1}</th>
                              <td className="align-middle"><Link style={{ color: "#285078" }} to={`/task/${task.id}`} >{task.task.description}</Link></td>
                              <td className="align-middle">{task.recruit.name} {task.recruit.lastName}</td>
                              <td className="align-middle">{task.user.name} {task.user.lastName}</td>
                              <td className="align-middle">{task.dueDate.split("-").reverse().join("/")}</td>
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

            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">


              <table className="table table-striped">
                <thead>
                  <tr className="table1 blueHead">
                    <th scope="col">#</th>
                    <th scope="col">Task</th>
                    <th scope="col">New Hire</th>
                    <th scope="col">Responsable</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Comments</th>
                  </tr>
                </thead>
                <tbody>
                  {allTasks.map((task) => {
                    return (
                      <>
                        {(task.state === "pending") ? (
                          <>
                            <tr key={task.id}>
                              <th scope="row" className="align-middle">{++indice2}</th>
                              <td className="align-middle"><Link style={{ color: "#285078" }} to={`/task/${task.id}`} >{task.task.description}</Link></td>
                              <td className="align-middle">{task.recruit.name} {task.recruit.lastName}</td>
                              <td className="align-middle">{task.user.name} {task.user.lastName}</td>
                              <td className="align-middle">{task.dueDate.split("-").reverse().join("/")}</td>
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
        </div>
      </div>

    </div>





)}
