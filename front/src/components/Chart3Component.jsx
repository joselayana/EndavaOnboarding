import React, { Fragment } from "react";
import "../css/style.css"
import { Bar, Line, Pie } from "react-chartjs-2";

export default ({ allUsers, allTasks }) => {

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
    labels: finalArrTask,
    datasets: [
      {
        data: arrTask,
        label: "Titulo",
        backgroundColor: [
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
