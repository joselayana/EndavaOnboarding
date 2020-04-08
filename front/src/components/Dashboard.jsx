import React from "react";
import "../css/style.css"
import "../css/style2.scss"

export default ({allTasks}) => {

  let arrBlocked=[];
  let arrExpired=[];
  let arrOngoing=[];
  let arrPending=[];


  allTasks.map((task)=>{
    (task.state === "pending") ? arrPending.push(task) : null;
    (task.state === "started") ? arrOngoing.push(task) : null;
    (task.state === "blocked out") ? arrBlocked.push(task) : null;
    if (task.state !== "finished") {
      if (new Date(task.dueDate) < new Date) arrExpired.push(task)
   }
  })

  return (

  <div style={{marginLeft:"3%", marginRight:"2%"}}> 
    <div class="row"> 

      <div class="col">
        <a href="#home-tab">
        <div className=" dashCard1 card"></div>
          <div className=" dashCard2 card">
            <div className="card-img-top HeaderCard redHead">
            <i className="fas fa-ban text-center"></i><span className="bodyCardTitle">BLOCKED</span>
            </div>
            <div className="card-body bodyCard">
              <p className="card-text text-center">{arrBlocked.length}</p>
            </div>
          </div>
          </a>
        </div> 

      <div class="col">
        <a href="#profile-tab">
          <div className=" dashCard1 card"></div>
            <div className=" dashCard2 card">
              <div className="card-img-top HeaderCard orangeHead">
                <i class="far fa-calendar-times"></i><span className="bodyCardTitle">EXPIRED</span>
              </div>
              <div className="card-body bodyCard">
                <p className="card-text text-center">{arrExpired.length}</p>
              </div>
          </div>
        </a>
      </div> 
      <div class="col">
        <div className=" dashCard1 card"></div>
        <div className=" dashCard2 card">
          <div className="card-img-top HeaderCard greenHead">
          <i class="fas fa-list-ul"></i><span className="bodyCardTitle">ONGOING</span>
          </div>
          <div className="card-body bodyCard">
            <p className="card-text text-center">{arrOngoing.length}</p>
          </div>
        </div>
      </div>
      <div class="col">
        <a href="#contact-tab">
        <div className=" dashCard1 card"></div>
        <div className=" dashCard2 card">
          <div className="card-img-top HeaderCard blueHead">
          <i class="far fa-clock"></i><span className="bodyCardTitle">PENDING</span>
          </div>
          <div className="card-body bodyCard">
            <p className="card-text text-center">{arrPending.length}</p>
          </div>
        </div>
      </a>
      </div> 
    </div>

 </div>

)}
