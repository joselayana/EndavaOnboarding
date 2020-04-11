import React from "react";
import "../css/style.css";
import "../css/style2.scss";
import Chart1Component from "./Chart1Component";
import Chart2Component from "./Chart2Component";
import Chart3Component from "./Chart3Component";
import Chart4Component from "./Chart4Component";

export default ({allTasks, allTasksDash, allRecruits, allDisciplines, allUsers, handleChange, state, handleSubmit, handleSubmit2, usersTasks, idUser}) => (

  <div class="parentGraph">

    <div class="div1Graph">

      <div class="card dashCardGraphic">
        <div  data-toggle="modal" data-target=".bd-example-modal-lg">
          <Chart1Component allTasks={allTasks} state={state} allTasksDash={allTasksDash}/>
        </div>
        <div class="card-body bodyCard2">
          <form onSubmit={handleSubmit2}>
            <div class="container">
                <div class="row">
                    <div class="col-5">From Date</div>
                    <div class="col-5">To Date</div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                  <div class="col-5">
                        <input type="date" name="fromDate" className="form-control" placeholder="Select Date" onChange={handleChange}/>
                    </div>
                    <div class="col-5">
                        <input type="date" name="toDate" className="form-control" placeholder="Select Date" onChange={handleChange} />
                    </div>
                </div>
            </div>
              <div class="col-2" >
                <button type="submit" class="btn btn-light">Search</button>
              </div>
          </form>
        </div>
      </div>

      <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <Chart1Component allTasks={allTasks} state={state} allTasksDash={allTasksDash}/>
          </div>
        </div>
      </div>

    </div>


    <div class="div2Graph">

      <div class="dashCardGraphic card" data-toggle="modal" data-target=".bd-example1-modal-lg">
        <Chart2Component allRecruits={allRecruits} allDisciplines={allDisciplines}/>
        <div class="card-body bodyCard2">
          <h5 class="card-title">New Hires</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>

      <div class="modal fade bd-example1-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <Chart2Component allRecruits={allRecruits} allDisciplines={allDisciplines}/>
          </div>
        </div>
      </div>

    </div>


    <div class="div3Graph">

      <div class="dashCardGraphic card" data-toggle="modal" data-target=".bd-example2-modal-lg">
        <Chart3Component allUsers={allUsers} allTasks={allTasks} />
        <div class="card-body bodyCard2">
          <h5 class="card-title">Task Stats</h5>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>

      <div class="modal fade bd-example2-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <Chart3Component allUsers={allUsers} allTasks={allTasks}/>
          </div>
        </div>
      </div>

    </div>


    <div class="div4Graph">

      <div class="dashCardGraphic card" >
        <div data-toggle="modal" data-target=".bd-example3-modal-lg">
          <Chart4Component allUsers={allUsers} allTasks={allTasks} usersTasks={usersTasks} state={state} idUser={idUser}/>
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
                  <button type="submit" class="btn btn-light">Search</button>
                </div>
              </div>
            </form>
        </div>
      </div>

      <div class="modal fade bd-example3-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <Chart4Component allUsers={allUsers} allTasks={allTasks} usersTasks={usersTasks} state={state}/>
          </div>
        </div>
      </div>

    </div>


  </div>

);
