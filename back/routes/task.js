const express = require('express');
const { Task, TaskRecruit, User, Recruit } = require("../models/index")
const router = express.Router();

router.post("/newTask", function (req, res) {
    Task.create(req.body)
        .then(res.send("Se creo la tarea"))
})

router.get("/myTasks/:id", function (req, res) {
    const id = req.params.id
    
    TaskRecruit.findAll({
        include: [
            {model: Recruit},
            {model: Task}
        ], 
        where: { userId: id },
        order: [
        ['id', 'DESC'],
        ],
    })
        .then(tasks => res.send(tasks))
    
    
    // TaskRecruit.findAll({
    //     where: {
    //         userId: id
    //     }
    // })
    //     .then(tasks => {
    //         console.log("aquiiiiiiiiiiiiii", tasks);

    //         res.send(tasks)
    //     })
})

module.exports = router


