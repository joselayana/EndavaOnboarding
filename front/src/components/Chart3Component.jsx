import React, { Fragment } from "react";
import "../css/style.css"
import { Bar, Line, Pie } from "react-chartjs-2";

export default ({ allUsers, allTasks }) => {
  console.log("usuarios", allUsers, "allTasks", allTasks)


  let usuarios = {}

  allUsers.map((user) => {
    usuarios[user.id] = 0
  })

  allTasks.map((task) => {
    usuarios[task.userId] += 1
  })


  let userKeyValueArray = Object.entries(usuarios)
  let arrIdUsers = []
  let arrTask = []
  let finalArrTask = []

  userKeyValueArray.map((arr) => {
    arrIdUsers.push(arr[0]);
    arrTask.push(arr[1])
  })

  arrIdUsers.map((userId) => {
    allUsers.map((userGeneral) => {
      if (userId == userGeneral.id) {
        let fullName = userGeneral.name + " " + userGeneral.lastName
        finalArrTask.push(fullName)
      }
    })
  })


          let data = {
            labels:finalArrTask,
            datasets:[
              {
                data:arrTask,
                label:"Titulo",
                backgroundColor:[
                  "#C31900",
                  "#ed6861",
                  "#BFBFBF",
                  "#F2F2F2",
                  "#48545B",
                  "#404040",
                  "#9BB4BE",
                  "#F0F3F3"
                ]
              }
            ],
          }

  let options = {
    legend: {
      position: "right",
    },
  }

  return (
    <Fragment>
      <div className="chart">
        <Pie
          data={data}
          options={options}
        />
      </div>
    </Fragment>
  )


}
