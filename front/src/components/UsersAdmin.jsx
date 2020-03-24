import React from "react"
import { Link } from "react-router-dom"

export default ({ handleSubmit, handleChange, state }) => (
  <div style={{ padding: "3%" }}>
    <h1>Users</h1>
    <br/>
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Lastname</th>
            <th scope="col">Email</th>
            <th scope="col">Discipline</th>
            <th scope="col">IsADmin</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.lasName}</td>
            <td>{user.email}</td>
            <td>{user.disciplineId}</td>
          </tr>
        </tbody>
      </table>
      <button type="submit" className="btn btn-rounded btn-block">Create New User</button>
    </div>
)
