const express = require('express');
const { Task, TaskRecruit, User } = require("../models/index")
const router = express.Router();

router.post("/newTask", function (req, res) {
    Task.create(req.body)
        .then(res.send("Se creo la tarea"))
})

router.get("/myTasks/:id", function (req, res) {
    const id = req.params.id
    TaskRecruit.findAll({
        where: {
            userId: id
        }
    })
        .then(tasks => {
            console.log("aquiiiiiiiiiiiiii", tasks);

            res.send(tasks)
        })
})

module.exports = router

// let arreglo = [{ ...}, { ...}, { ...}]

// arreglo.map((item) => {
//     Task.findByPk(item.taskId)
// })

// TasksRecruit.findall({
//     where: 
//     {userId: id},
//     include:{
//         model: Tasks,
//         as: 'task',
//         {where: }
//     }
// })

// TasksRecruit.findAll({
//     include: [{
//     model: User,
//     where: { id: id }
//     },
//     {
//     model: Recruit,
//     where: {}
//     },
//     ], where: { estado: "pending" },
//     order: [
//     ['id', 'DESC'],
//     ],
//     }) 