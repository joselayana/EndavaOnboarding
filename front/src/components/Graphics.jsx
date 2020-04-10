import React from "react";
import "../css/style.css";
import "../css/style2.scss";
import Chart1Component from "./Chart1Component";
import Chart2Component from "./Chart2Component";
import Chart3Component from "./Chart3Component";
import Chart4Container from "../containers/Chart4Container";

export default ({allTasks, allRecruits, allDisciplines, allUsers}) => (

  <div class="parentGraph">

    <div class="div1Graph">

      <div class="card dashCardGraphic" data-toggle="modal" data-target=".bd-example-modal-lg">
        <Chart1Component allTasks={allTasks}/>
        <div class="card-body bodyCard2">
          <h5 class="card-title">Efficiency Report</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>

      <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <Chart1Component allTasks={allTasks}/>
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
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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
        <Chart3Component allUsers={allUsers} allTasks={allTasks}/>
        <div class="card-body bodyCard2">
          <h5 class="card-title">Task Stats</h5>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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

      <div class="dashCardGraphic card" data-toggle="modal" data-target=".bd-example3-modal-lg">
        <Chart4Container allUsers={allUsers} allTasks={allTasks}/>
        <div class="card-body bodyCard2">
          <h5 class="card-title">Task Stats</h5>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>

      <div class="modal fade bd-example3-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <Chart4Container allUsers={allUsers} allTasks={allTasks}/>
          </div>
        </div>
      </div>

    </div>


  </div>

);
