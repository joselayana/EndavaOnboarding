import React, { Fragment } from "react";
import "../css/style.css"
import { Bar, Line, Pie } from "react-chartjs-2";

export default ({allTasks }) => {

  let taskCategory = {}

  allTasks.map((task) => {
    if(task.state==="blocked out"){
      taskCategory[task.task.description] =0
    }
  })

  allTasks.map((task) => {
    if(task.state==="blocked out"){
      taskCategory[task.task.description] += 1
    }
  })

  let arrBloqueadasKeyyVal= Object.entries(taskCategory)
  let arrKey=[];
  let arrVal=[];

  arrBloqueadasKeyyVal.map ((arr)=>{
    arrKey.push(arr[0]);
    arrVal.push(arr[1])
  })

          let data = {
            labels:arrKey,
            datasets:[
              {
                data:arrVal,
                label:"Titulo",
                backgroundColor:[
                  "#48545B",,
                  "#9BB4BE",
                  "#F0F3F3",
                  "#404040",
                  "#C31900",
                  "#ed6861",
                  "#BFBFBF",
                  "#F2F2F2",
                ]
              }
            ],
          }

  let options = {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Distribution of Blocked Tasks by Categories"
  }
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
