import React from "react";
import "../css/style.css";
import "../css/style2.scss";

import Chart1Component from "./Chart1Component";
import Chart2Component from "./Chart2Component";
import Chart3Component from "./Chart3Component";
import Chart4Component from "./Chart4Component";

import Chart1ComponentRegularUser from "./Chart1ComponentRegularUser";
import Chart2ComponentRegularUser from "./Chart2ComponentRegularUser";
import Chart3ComponentRegularUser from "./Chart3ComponentRegularUser";


export default ({allTasks, allTasksDash, allRecruits, allDisciplines, allUsers, handleChange, state, handleSubmit, handleSubmit2, usersTasks, idUser, user}) => {


  if(allTasks.length && allDisciplines.length && allUsers.length && usersTasks.length){

    return(

      <div class="parentGraph">

      {(user.isAdmin) ? (
        <>
          <div class="div1Graph">
              <div class="card dashCardGraphic">
                <div  data-toggle="modal" data-target=".bd-example-modal-lg">
                  {(user.isAdmin)?<Chart1Component allTasks={allTasks} state={state} allTasksDash={allTasksDash} user={user}/>:<Chart1ComponentRegularUser allTasks={allTasks} state={state} allTasksDash={allTasksDash} user={user} usersTasks={usersTasks}/>}
                </div>
                <div class="card-body bodyCard2">
                  <form onSubmit={handleSubmit2}>
                    <div class="container">
                        <div class="row">
                            <div class="col-5">From Date</div>
                            <div class="col-5">To Date</div>
                        </div>
                    </div>

                    <div class="container ">
                        <div class="row form-group input-group">
                                <input type="date" name="fromDate" className="form-control" placeholder="Select Date" onChange={handleChange}/>
                                <input type="date" name="toDate" className="form-control" placeholder="Select Date" onChange={handleChange} />
                                <button type="submit" class="btn btn-light"><i class="fas fa-search"></i></button>
                        </div>
                    </div>

                  </form>
                </div>
              </div>

              <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                  {(user.isAdmin)?<Chart1Component allTasks={allTasks} state={state} allTasksDash={allTasksDash} user={user}/>:<Chart1ComponentRegularUser allTasks={allTasks} state={state} allTasksDash={allTasksDash} user={user} usersTasks={usersTasks}/>}
                  </div>
                </div>
              </div>

          </div>

          <div class="div2Graph">

              <div class="dashCardGraphic card" >
                <div data-toggle="modal" data-target=".bd-example3-modal-lg">
                {(user.isAdmin)?<Chart4Component allUsers={allUsers} allTasks={allTasks} usersTasks={usersTasks} state={state} idUser={idUser} user={user}/>: null }
                </div>
                <div class="card-body bodyCard2">
                  <h5 class="card-title">Task Stats</h5>
                    <form onSubmit={handleSubmit}>
                      <div class="row">
                        <div class="col-sm">
                            <select selected="" name="responsable" className="form-control border1" onChange={handleChange} value={state.responsable}>
                                <option className="border1">Select Responsable</option>
                                {allUsers.map((userOption) => (
                                    <option key={userOption.id} className="border1">{userOption.name} {userOption.lastName} ({userOption.id})</option>
                                ))}
                            </select>
                        </div>
                        <div class="col-sm">
                          <button type="submit" class="btn btn-light"><i class="fas fa-search"></i></button>
                        </div>
                      </div>
                    </form>
                </div>
              </div>

              <div class="modal fade bd-example3-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                  {(user.isAdmin)?<Chart4Component allUsers={allUsers} allTasks={allTasks} usersTasks={usersTasks} state={state} idUser={idUser} user={user}/>: null }
                  </div>
                </div>
              </div>

          </div>
        </>
      ) : (
        <>
          <div class="div5Graph">
          <div class="card dashCardGraphic">
            <div  data-toggle="modal" data-target=".bd-example-modal-lg">
              {(user.isAdmin)?<Chart1Component allTasks={allTasks} state={state} allTasksDash={allTasksDash} user={user}/>:<Chart1ComponentRegularUser allTasks={allTasks} state={state} allTasksDash={allTasksDash} user={user} usersTasks={usersTasks}/>}
            </div>
            <div class="card-body bodyCard2">
              <form onSubmit={handleSubmit2}>
                <div class="container">
                    <div class="row">
                        <div class="col-5">From Date</div>
                        <div class="col-5">To Date</div>
                    </div>
                </div>

                <div class="container ">
                    <div class="row form-group input-group">
                            <input type="date" name="fromDate" className="form-control" placeholder="Select Date" onChange={handleChange}/>
                            <input type="date" name="toDate" className="form-control" placeholder="Select Date" onChange={handleChange} />
                            <button type="submit" class="btn btn-light"><i class="fas fa-search"></i></button>
                    </div>
                </div>

              </form>
            </div>
          </div>

          <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
              {(user.isAdmin)?<Chart1Component allTasks={allTasks} state={state} allTasksDash={allTasksDash} user={user}/>:<Chart1ComponentRegularUser allTasks={allTasks} state={state} allTasksDash={allTasksDash} user={user} usersTasks={usersTasks}/>}
              </div>
            </div>
          </div>

      </div>
      </>
      )}
        
        <div class="div4Graph">

          <div class="dashCardGraphic card" data-toggle="modal" data-target=".bd-example1-modal-lg">
          {(user.isAdmin)?<Chart2Component allRecruits={allRecruits} allDisciplines={allDisciplines} user={user}/>:<Chart2ComponentRegularUser allRecruits={allRecruits} allDisciplines={allDisciplines} user={user}/>}
            <div class="card-body bodyCard2">
              <h5 class="card-title">New Hires</h5>
              <p class="card-text">Amount of new employees in each discipline.</p>
            </div>
          </div>

          <div class="modal fade bd-example1-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
              {(user.isAdmin)?<Chart2Component allRecruits={allRecruits} allDisciplines={allDisciplines} user={user}/>:<Chart2ComponentRegularUser allRecruits={allRecruits} allDisciplines={allDisciplines} user={user}/>}
              </div>
            </div>
          </div>

        </div>


        <div class="div3Graph">

          <div class="dashCardGraphic card" data-toggle="modal" data-target=".bd-example2-modal-lg">
          {(user.isAdmin)?<Chart3Component allUsers={allUsers} allTasks={allTasks} user={user}/>:<Chart3ComponentRegularUser allUsers={allUsers} allTasks={allTasks} user={user}/>}
            <div class="card-body bodyCard2">
              <h5 class="card-title">Task Owners</h5>
              <p class="card-text">Tasks divided by owner.</p>
            </div>
          </div>

          <div class="modal fade bd-example2-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
              {(user.isAdmin)?<Chart3Component allUsers={allUsers} allTasks={allTasks} user={user}/>:<Chart3ComponentRegularUser allUsers={allUsers} allTasks={allTasks} user={user}/>}
              </div>
            </div>
          </div>

        </div>





      </div>

  )} else {
      return (
        <div class="spinner-border text-danger" role="status" style={{ marginTop: "20%", marginLeft: "50%" }}>
            <span class="sr-only">Loading...</span>
        </div>
    )}

}
