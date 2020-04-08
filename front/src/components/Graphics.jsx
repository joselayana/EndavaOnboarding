import React from "react";
import "../css/style.css";
import "../css/style2.scss";
import Chart1Component from "./Chart1Component";

export default ({allTasks}) => (
  <div style={{marginLeft:"3%", marginRight:"2%", marginTop: "10%"}}> 

    <div class="row"> 

      <div class="col">
        <div class="card dashCardGraphic" data-toggle="modal" data-target=".bd-example-modal-lg">
          <Chart1Component allTasks={allTasks}/>
          <div class="card-body bodyCard2">
            <h5 class="card-title">Efficiency Report</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>

      <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <Chart1Component allTasks={allTasks}/>
          </div>
        </div>
      </div>



      <div class="col">
        <div class="dashCardGraphic card">
          <img class="card-img-top" src="/images/graphic/3.png" alt="Card image cap"/>
          <div class="card-body bodyCard2">
            <h5 class="card-title">New Hires</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="dashCardGraphic card">
          <img class="card-img-top" src="/images/graphic/5.png" alt="Card image cap"/>
          <div class="card-body bodyCard2">
            <h5 class="card-title">Task Stats</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>


   </div>

 </div>

);
