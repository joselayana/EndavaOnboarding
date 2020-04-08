import React, { Fragment } from "react";
import "../css/style.css"
import {Bar, Line, Pie} from "react-chartjs-2";

export default ({ allTasks}) => {

    let lastThirtyDays=[];
    let arrBlocked=[];
    let arrExpired=[];
    let arrOngoing=[];
    let arrPending=[];
    let arrFinished=[];

          allTasks.map((task)=>{
            var created = new Date(task.createdAt);
            var today = new Date();

            // To calculate the time difference of two dates
            var Difference_In_Time = today.getTime() - created.getTime();

            // To calculate the no. of days between two dates
            var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);


              if (Math.round(Difference_In_Days) < 30) lastThirtyDays.push(task)
          })


          lastThirtyDays.map((task)=>{
            (task.state === "pending") ? arrPending.push(task) : null;
            (task.state === "started") ? arrOngoing.push(task) : null;
            (task.state === "blocked out") ? arrBlocked.push(task) : null;
            (task.state === "finished") ? arrFinished.push(task) : null;
            if (task.state !== "finished") {
              if (new Date(task.dueDate) < new Date) arrExpired.push(task)
            }
          })

          let data = {
            labels:["Blocked","Expired", "Ongoing", "Pending", "Finished" ],
            datasets:[
              {
                data:[arrBlocked.length, arrExpired.length,arrOngoing.length, arrPending.length, arrFinished.length],
                label:"Titulo",
                backgroundColor:[
                  "#cc0000",
                  "#ff8800",
                  "#007e33",
                  "#0099cc",
                  "#17a2b8"
                ]
              }
            ],
          }

          return (
              <Fragment>
                <div className="chart">
                  <Bar
                    data={data}
                  />
                </div>
              </Fragment>
          )


}
