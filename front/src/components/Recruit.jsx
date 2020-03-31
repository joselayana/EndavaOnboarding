import React, { Fragment } from "react";
import "../css/style.css"
import { Link } from "react-router-dom"


export default ({ recruits }) => {
  let indice = 0
  return (
    <div style={{ padding: "3%" }}>

      <h1>All New Hires</h1>
      <br />
      <div>
        <div className="container box_container2">
          <table className="table table-striped">
            <thead>
              <tr className="table1">
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Discipline</th>
                <th scope="col">Entry Date</th>
                <th scope="col">Phone</th>
                <th scope="col">DNI</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              {recruits.map((recruit) => {
                let fechaArray = recruit.entryDate.split("-")
                let fechaOrdenada = fechaArray.reverse()
                let dateOfEntry = fechaOrdenada.join("/")
                indice = indice + 1
                return (
                  <tr key={recruit.id}>
                    <th scope="row" className="align-middle">{indice}</th>
                    <td className="align-middle">{recruit.name}</td>
                    <td className="align-middle">{recruit.lastName}</td>
                    <td className="align-middle">{recruit.email}</td>
                    <td className="align-middle">{recruit.discipline.description}</td>
                    <td className="align-middle">{dateOfEntry}</td>
                    <td className="align-middle">{recruit.phone}</td>
                    <td className="align-middle">{recruit.DNI}</td>
                    <Link to={`/recruit/${recruit.id}`}><td className="align-middle">View More</td></Link>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <h1 style={{ marginTop: "50px" }}></h1>
      <div className="container box_container2">
        <p>Want to add a new hire?</p>
        <label></label>
        <Link to="/newRecruit"><button className="btn btn-info btn-block mb-2" style={{ backgroundColor: "#1d57a8", borderColor: "#1d57a8" }}>Create a New Hire</button></Link>
      </div>
    </div>
  )
}