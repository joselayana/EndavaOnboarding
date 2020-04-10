import React, { Fragment } from "react";
import "../css/style.css"
import {Bar, Line, Pie, HorizontalBar} from "react-chartjs-2";

export default ({ allTasks}) => {

    let lastThirtyDays=[];
    let arrBlocked=[];
    let arrExpired=[];
    let arrOngoing=[];
    let arrPending=[];
    let arrFinished=[];

        //   allTasks.map((task)=>{
        //     var created = new Date(task.createdAt);
        //     var today = new Date();

        //     // To calculate the time difference of two dates
        //     var Difference_In_Time = today.getTime() - created.getTime();

        //     // To calculate the no. of days between two dates
        //     var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);


        //       if (Math.round(Difference_In_Days) < 30) lastThirtyDays.push(task)
        //   })


        //   lastThirtyDays.map((task)=>{
        //     (task.state === "pending") ? arrPending.push(task) : null;
        //     (task.state === "started") ? arrOngoing.push(task) : null;
        //     (task.state === "blocked out") ? arrBlocked.push(task) : null;
        //     (task.state === "finished") ? arrFinished.push(task) : null;
        //     if (task.state !== "finished") {
        //       if (new Date(task.dueDate) < new Date) arrExpired.push(task)
        //     }
        //   })

          let data = {
            labels:["Blocked","Expired", "Ongoing", "Pending", "Finished" ],
            datasets:[
              {
                data:[10,8,7,8,6],
                label:"Titulo",
                minBarLength: 10,
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

          let options = {
            legend: {
              position: "right",
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
          }

          return (
              <Fragment>
                <div className="chart">
                  <Bar
                    data={data}
                    options={options}
                  />
                </div>
              </Fragment>
          )


}