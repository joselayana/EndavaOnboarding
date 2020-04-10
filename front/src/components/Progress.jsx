import React from "react";
import "../css/style.css"
import "../css/style2.scss"

export default ({allTasks,allRecruits}) => {

 if(allTasks && allRecruits){
  return(
    <div className="box_container4" style={{marginLeft:"3%", marginRight:"2%", marginTop: "3%"}}> 
      {allRecruits.map((recruit)=>{
        let recruitTasks=[];
        let finishedTasks=[];
        let porcentage;
        let color;

        {allTasks.map((task)=>{
          if (task.recruitId==recruit.id) recruitTasks.push(task)
          if (task.state==="finished" && task.recruitId==recruit.id) finishedTasks.push(task)
          porcentage=finishedTasks.length*100/recruitTasks.length
        })
        }

        {
         if (porcentage <= 25) color= "#cc0000"
         else if (porcentage <= 50) color= "#ff8800"
         else if (porcentage <= 99) color= "#0099cc"
         else if (porcentage = 100) color= "#007e33"
       }

        return(
            <>
              <p>{recruit.name} {recruit.lastName}</p>
              <div className="progress">
                <div className= "progress-bar" role="progressbar" style= {{width: `${porcentage}%` ,backgroundColor:`${color}`}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </>
          )
        })
      }

 </div>

)}

}
