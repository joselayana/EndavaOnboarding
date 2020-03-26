import React, { Fragment } from "react"
import { Link } from "react-router-dom"

export default ({ users, handleProfile }) => {
  let indice = 0
  return (
    <Fragment>
      {(users.length) ?
        (
          <Fragment>
            <h1>Users</h1>
            <br />
            <div>
              <div className="container box_container2">
                <table className="table table-striped">
                  <thead>
                    <tr className="table1">
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Discipline</th>
                      <th scope="col">Email</th>
                      <th scope="col">Profile</th>
                      <th scope="col"> </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => {
                      indice = indice + 1
                      return (
                        <tr key={user.id}>
                          <th scope="row" className="align-middle">{indice}</th>
                          <td className="align-middle">{user.name} {user.lastName}</td>
                          <td className="align-middle">{user.discipline.description}</td>
                          <td className="align-middle">{user.email}</td>

                          {(user.isAdmin) ? (
                            <>
                              <td className="align-middle"> Admin </td>
                              <button type="button" className="align-middle btn btn-outline-info" data-toggle="modal" data-target="#admin">Change profile</button>
                              {/* <!-- Modal --> */}
                              <div className="modal fade" id="admin" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5 className="modal-title" id="exampleModalCenterTitle">Profile change request</h5>
                                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div className="modal-body"> You're changing this user's profile to "Regular User" </div>
                                    <div className="modal-footer">
                                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                      <button onClick={() => handleProfile(user.id, 1)} data-dismiss="modal" type="button" className="btn btn-primary">Save change</button>
                                    </div>

                                  </div>
                                </div>
                              </div>
                            </>
                          ) : (
                              <>
                                <td className="align-middle"> Regular User </td>
                                <button type="button" className="align-middle btn btn-outline-info" data-toggle="modal" data-target="#regular">Change profile</button>
                                {/* <!-- Modal --> */}
                                <div className="modal fade" id="regular" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                  <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalCenterTitle">Profile change request</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                        </button>
                                      </div>
                                      <div className="modal-body"> You're changing this user's profile to "Admin" </div>
                                      <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button onClick={() => handleProfile(user.id, 2)} data-dismiss="modal" type="button" className="btn btn-primary">Save change</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}

                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </Fragment>
        ) : null}


    </Fragment>

  )
}
