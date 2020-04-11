import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css"
import "../css/style2.scss"

export default ({ user, onLogout, path }) => {
  return (
    <>
      {(user.id && path.path) ? (
        <div className="wrapper">
          <div className="sidebar">
            <div style={{ marginBottom: "40%" }} >
              <a className="sidebar-brand" href="/">
                <img src="/images/logo/Endava_Logo_GyR.svg" />
              </a>
            </div>
            <div style={{ color: "white" }}  >
              <center><h6> Wellcome {user.name}!!!</h6></center>
            </div>
            <ul>
              {/* DASHBOARD */}
              <li>
                <a className="linkSection" href={`/dashboard/${user.id}`} ><i className="fas fa-chart-line"></i> Dashboard</a>
              </li>
              {/* TASK */}
              <li>
                <button className="linkSection btn btn-link" type="button" data-toggle="collapse" data-target="#myTasks" aria-expanded="false" aria-controls="collapseExample">
                  <i className="fas fa-list-ol"></i>  Tasks
                </button>

                <> {(path.path === "/myTasks/:userId" || path.path === "/editAvailableTasks/:taskId" || path.path === "/task/:taskId") ? (
                  <div className="collapse show" id="myTasks">
                    <div >
                      <a className="linkInternos" href={`/myTasks/${user.id}`}  > My tasks</a>
                      <a className="linkInternos" href={`/myTasks/${user.id}`}  > My finished tasks</a>
                      <>
                        {(user.isAdmin) ? (
                          <>
                            <a className="linkInternos" href={`/myTasks/${user.id}`}  > All pending tasks</a>
                            <a className="linkInternos" href={`/myTasks/${user.id}`}  > All finished tasks</a>
                            <a className="linkInternos" href={`/myTasks/${user.id}`}  > Add or edit available tasks</a>

                          </>
                        ) :
                          null
                        }
                      </>
                    </div>
                  </div>
                ) : (
                    <div className="collapse" id="myTasks">
                      <div >
                        <a className="linkInternos" href={`/myTasks/${user.id}`}  > My tasks</a>
                        <a className="linkInternos" href={`/myTasks/${user.id}`}  > My finished tasks</a>
                        <>
                          {(user.isAdmin) ? (
                            <>
                              <a className="linkInternos" href={`/myTasks/${user.id}`}  > All pending tasks</a>
                              <a className="linkInternos" href={`/myTasks/${user.id}`}  > All finished tasks</a>
                              <a className="linkInternos" href={`/myTasks/${user.id}`}  > Add or edit available tasks</a>

                            </>
                          ) :
                            null
                          }
                        </>
                      </div>
                    </div>
                  )}
                </>
              </li>
              <>
                {(user.isAdmin) ? (
                  <>
                    {/* NEW HIRES */}
                    <li>
                      <button className="linkSection btn btn-link" type="button" data-toggle="collapse" data-target="#newHires" aria-expanded="false" aria-controls="collapseExample">
                        <i className="fas fa-users"></i> New Hires
                      </button>

                      <> {(path.path === "/recruits" || path.path === "/recruit/:recruitId" || path.path === "/recruit/edit/:recruitId" || path.path === "/newRecruit") ? (
                        <div className="collapse show" id="newHires">
                          <div >
                            <a className="linkInternos" href="/newRecruit" > Register a new hire</a>
                            <a className="linkInternos" href="/recruits" > All new hires</a>
                            <a className="linkInternos" href="/recruits" > Edit information of a new hire</a>
                            <a className="linkInternos" href="/recruits" > Delete a new hire</a>
                            <a className="linkInternos" href="/recruits" > Assign tasks to a new hire</a>
                          </div>
                        </div>
                      ) : (
                          <div className="collapse" id="newHires">
                            <div >
                              <a className="linkInternos" href="/newRecruit" > Register a new hire</a>
                              <a className="linkInternos" href="/recruits" > All new hires</a>
                              <a className="linkInternos" href="/recruits" > Edit information of a new hire</a>
                              <a className="linkInternos" href="/recruits" > Delete a new hire</a>
                              <a className="linkInternos" href="/recruits" > Assign tasks to a new hire</a>
                            </div>
                          </div>
                        )
                      }
                      </>
                    </li>
                    {/* USERS */}
                    <li>
                      <button className="linkSection btn btn-link" type="button" data-toggle="collapse" data-target="#users" aria-expanded="false" aria-controls="collapseExample">
                        <i className="fas fa-user"></i> Users
                      </button>


                      <> {(path.path === "/users" || path.path === "/deleteUser/:userId") ? (
                        <div className="collapse show" id="users">
                          <div >
                            <a className="linkInternos" href="/users" >Manage users profile</a>
                            <a className="linkInternos" href="/users" > Delete a user</a>
                          </div>
                        </div>
                      ) : (
                          <div className="collapse" id="users">
                            <div >
                              <a className="linkInternos" href="/users" >Manage users profile</a>
                              <a className="linkInternos" href="/users" > Delete a user</a>
                            </div>
                          </div>
                        )
                      }
                      </>
                    </li>
                  </>
                ) :
                  null
                }
              </>
            </ul>
            <div className="social_media">
              <button onClick={onLogout} type="button" class="btn btn-light btnout"><i class="fa fa-sign-out-alt"></i>Log Out</button>
            </div>
          </div>
        </div>
      ) : (
          null
        )
      }
    </>
  )
};
