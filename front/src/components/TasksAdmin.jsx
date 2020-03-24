import React from "react"
import { Link } from "react-router-dom"

export default ({ handleSubmit, handleChange, state, tasks, handleClick }) => {
  let indice = 0
  return(
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
            <th scope="col">New State</th>
            <th scope="col">Coments</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            let fechaArray = task.dueDate.split("-")
            let fechaOrdenada = fechaArray.reverse()
            let dueDate = fechaOrdenada.join("/")
            indice = indice + 1
            return(
            <tr key={task.id}>
              <th scope="row">{indice}</th>
              <td>{task.task.description}</td>
              <td>{task.recruit.name}</td>
              <td>{dueDate}</td>
              <td>{task.state}</td>
              <td>
                  <select onChange={handleChange} selected="" name="taskState" className="form-control border1">
                    <option className="border1">Actual State</option>
                    <option className="border1">pending</option>
                    <option className="border1">started</option>
                    <option className="border1">blocked up</option>
                    <option className="border1">finished</option>
                  </select>
                  <button onClick={handleClick} style={{display:"inline-block"}}><i className="far fa-save"></i></button>
              </td>
              <td>{task.comment}</td>
            </tr>
          )})}
        </tbody>
      </table>
    </div>


    <h1 style={{ marginTop: "50px" }}>Add Tasks</h1>
    <br />
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Description</label>
        <textarea onChange={handleChange} value={state.description} name="description" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button className="btn btn-info btn-block mb-2" style={{ backgroundColor: "#adb5bd", borderColor: "#adb5bd" }}>Create Task</button>
    </form>
  </div>
)}
