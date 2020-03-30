import React from "react";



export default ({handleChange, handleSubmit, recruit}) => (

  <div className="container box_container2" style={{ marginTop: "50px" }}>
    <div className="card bg-light">
      <div className="card-body mx-auto" style={{ maxWidth: "400px" }}>
        <h4 className="card-title mt-3 text-center">Edit {recruit.name} {recruit.lastName}'s Information</h4>
        <p className="text-center">It's not necessary to complete all the fields</p>

        <form onSubmit= {handleSubmit}>

          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"> <i className="fa fa-user"></i> </span>
            </div>
            <input onChange={handleChange} name="name" className="form-control" placeholder="Name" defaultValue={recruit.name} type="text" />
          </div>

          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"> <i className="fa fa-user"></i> </span>
            </div>
            <input onChange={handleChange} name="lastName" className="form-control" placeholder="Lastname" defaultValue={recruit.lastName} type="text" />
          </div>

          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
            </div>
            <input onChange={handleChange} name="email" className="form-control" placeholder="Email address" defaultValue={recruit.email} type="email" />
          </div>

          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
            </div>
            <input onChange={handleChange} name="phone" className="form-control" placeholder="Phone number" defaultValue={recruit.phone} type="text" />
          </div>

          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"> <i className="fa fa-id-card"></i> </span>
            </div>
            <input onChange={handleChange} name="DNI" className="form-control" placeholder="DNI" defaultValue={recruit.DNI} type="text" />
          </div>

          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"> <i className="fa fa-user-clock"></i> </span>
            </div>
              <input onChange={handleChange} type="date" name="entryDate" max="2050-12-31" min="2020-03-01" className="form-control"
                placeholder="Starting on" defaultValue={recruit.entryDate} />
          </div>

          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"> <i className="fa fa-building"></i> </span>
            </div>
            <select onChange={handleChange} selected="" name="discipline" className="form-control" defaultValue={recruit.discipline}>
              <option> Select Discipline</option>
              <option>Development</option>
              <option>Project Manager</option>
              <option>Testing</option>
              <option>Pdrc</option>
            </select>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">Save Changes</button>
          </div>

        </form>
      </div>
    </div>
  </div>
);

