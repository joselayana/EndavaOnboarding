const express = require('express');
const { Task, TaskRecruit, User, Recruit } = require("../models/index")
const router = express.Router();

router.post("/newTask", function (req, res) {
    Task.create(req.body)
        .then(res.send("Se creo la tarea"))
})

router.put("/edit/:id", function (req, res, next) {
    const taskId = req.params.id
    const newState = req.body.newTaskState
    const newComment = req.body.comment
    
    TaskRecruit.update(
        {comment: newComment, state: newState},
        {where: {id : taskId}}
      )
      .then(res.send("Se actualizó la tarea"))
      .catch(next)  
})

router.get("/myTasks/:id", function (req, res) {
    const id = req.params.id

    TaskRecruit.findAll({
        include: [
            { model: Recruit },
            { model: Task }
        ],
        where: { userId: id },
        order: [
            ['id', 'DESC'],
        ],
    })
        .then(tasks => res.send(tasks))

})


router.get("/:id", (req, res) => {
    const id = req.params.id
    TaskRecruit.findAll({
        include: [
            { model: Recruit },
            { model: Task }
        ],
        where: {
            id: id
        }


    })
        .then(task => res.send(task[0]))

})

module.exports = router



