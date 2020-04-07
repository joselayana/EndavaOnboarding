import React from "react";
import "../css/style.css"
import "../css/style2.scss"

export default () => (
  <div style={{marginLeft:"3%", marginRight:"2%"}}> 
    <div class="row"> 
      <div class="col">
        <div className=" dashCard1 card"></div>
          <div className=" dashCard2 card">
            <div className="card-img-top HeaderCard redHead">
            <i className="fas fa-ban text-center"></i><span className="bodyCardTitle">BLOCKED</span>
            </div>
            <div className="card-body bodyCard">
              <p className="card-text text-center">300</p>
            </div>
          </div>
        </div> 
      <div class="col">
        <div className=" dashCard1 card"></div>
        <div className=" dashCard2 card">
          <div className="card-img-top HeaderCard orangeHead">
          <i class="far fa-calendar-times"></i><span className="bodyCardTitle">EXPIRED</span>
          </div>
          <div className="card-body bodyCard">
            <p className="card-text text-center">240</p>
          </div>
        </div>
      </div> 
      <div class="col">
        <div className=" dashCard1 card"></div>
        <div className=" dashCard2 card">
          <div className="card-img-top HeaderCard greenHead">
          <i class="fas fa-list-ol"></i><span className="bodyCardTitle">ONGOING</span>
          </div>
          <div className="card-body bodyCard">
            <p className="card-text text-center">280</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div className=" dashCard1 card"></div>
        <div className=" dashCard2 card">
          <div className="card-img-top HeaderCard blueHead">
          <i class="far fa-clock"></i><span className="bodyCardTitle">PENDING</span>
          </div>
          <div className="card-body bodyCard">
            <p className="card-text text-center">240</p>
          </div>
        </div>
      </div> 
    </div>

 </div>

);
