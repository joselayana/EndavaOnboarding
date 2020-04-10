import React, { Fragment } from "react";
import "../css/style.css"
import {Bar, Line, Pie} from "react-chartjs-2";

export default ({ allUsers, allTasks}) => {
console.log("usuarios",allUsers, "allTasks", allTasks)


    let usuarios= {}

    allUsers.map((user)=>{
      usuarios[user.id]=0
    })

    allTasks.map((task)=>{
      usuarios[task.userId]+=1
    })


    let userKeyValueArray=Object.entries(usuarios)
    let arrUser=[]
    let arrTask=[]

    userKeyValueArray.map((arr)=>{
      arrUser.push(arr[0]);
      arrTask.push(arr[1])
    })


          let data = {
            labels:arrUser,
            datasets:[
              {
                data:arrTask,
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
