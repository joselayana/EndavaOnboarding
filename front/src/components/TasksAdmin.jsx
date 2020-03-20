import React from "react"
import { Link } from "react-router-dom"

export default ({ handleSubmit, handleChange, state }) => (
  <div style={{ padding: "3%" }}>
    <h1>My Tasks</h1>
    <br />
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task</th>
            <th scope="col">Recruit</th>
            <th scope="col">Due Date</th>
            <th scope="col">State</th>
            <th scope="col">Coments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Finalizado</td>
            <td>HolaHOla</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Finalizado</td>
            <td>HolaHOla</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>Finalizado</td>
            <td>HolaHOla</td>
          </tr>
        </tbody>
      </table>
    </div>


    <h1 style={{ marginTop: "50px" }}>Add Tasks</h1>
    <br />
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Description</label>
        <textarea onChange={handleChange} value={state.description} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button className="btn btn-info btn-block mb-2" style={{ backgroundColor: "#adb5bd", borderColor: "#adb5bd" }}>Create Task</button>
    </form>
  </div>
)
