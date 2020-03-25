import React from "react"
import { Link } from "react-router-dom"
import "../css/style.css"

export default ({ handleSubmit, handleChange, state, tasks, handleClick }) => {
  let indice = 0
  return(
  <div style={{ padding: "3%" }}>

    <h1>My Tasks</h1>
    <br />
    <div>
    <div className="container box_container2">
      <table className="table table-striped">
        <thead>
          <tr className="table1">
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
              <th scope="row" className="align-middle">{indice}</th>
              <td className="align-middle"><Link style={{color:"#1d57a8"}} to={`/task/${task.id}`} >{task.task.description}</Link></td>
              <td className="align-middle">{task.recruit.name}</td>
              <td className="align-middle">{dueDate}</td>
              <td className="align-middle">{task.state}</td>
              <td className="align-middle">
                <div className="form-group input-group">
                  <select onChange={handleChange} selected="" name="taskState" className="form-control border1">
                    <option className="border1">Actual State</option>
                    <option className="border1">pending</option>
                    <option className="border1">started</option>
                    <option className="border1">blocked up</option>
                    <option className="border1">finished</option>
                  </select>
                  {/*<button onClick={handleClick} style={{display:"inline-block"}}><i className="far fa-save"></i></button>*/}
                </div>
              </td>
              <td className="align-middle">{task.comment}</td>
            </tr>
          )})}
        </tbody>
      </table>
    </div>
    </div>


    <h1 style={{ marginTop: "50px" }}>Add Tasks</h1>
    <br />
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
)}
