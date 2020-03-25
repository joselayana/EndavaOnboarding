const express = require('express');
const router = express.Router();
const {TaskRecruit, Recruit, Discipline, User } = require('../models');
const Sequelize = require("sequelize")
const Promise = require("bluebird");
module.exports = router;

router.get('/', function (req, res, next) {
    TaskRecruit.findAll()
        .then((tasksRec) => res.status(200).json(tasksRec))
});


router.get("/:recruitId", (req, res, next) =>{
    TaskRecruit.findAll({where: {
        recruitId: req.params.recruitId,
    }})
    .then(tasks=> {
        if(tasks){
            res.status(200).json(tasks)
        } else {
            res.sendStatus(404)
        }

    })
    .catch(err =>res.sendStatus(500))

});

router.get("byUser/:recruitId", (req, res, next) =>{
    TaskRecruit.findAll({where: {
        recruitId: req.params.recruitId,
    }})
    .then(tasks=> {
        tasks.findAll({
            userId: req.user.id
        })
    })
    .then(tasks=> {
        if(tasks){
            res.status(200).json(tasks)
        } else {
            res.sendStatus(404)
        }

    })
    .catch(err =>res.sendStatus(500))

});


router.post('/', function (req, res, next) {
    TaskRecruit.create(req.body)
    .then(nuevaTaskRec => {
        return Promise.all([
            nuevaTaskRec.setDiscipline(req.body.discipline),
            nuevaTaskRec.setUser(req.body.user),
            nuevaTaskRec.setRecruit(req.recruit)
        ])
    })
    .then((nuevaTaskRec) => res.status(201).json(nuevaTaskRec))
});

router.delete("/:id", (req,res,next) =>{
    TaskRecruit.findByPk(req.params.id)
    .then(task=>{
        if(task){
            task.destroy()
            .then(() => res.sendStatus(204))
        } else {
            res.sendStatus(404)
        }

    })
    .catch(err => res.sendStatus(500))  
})

router.delete("byRecruit/:recruitId", (req,res,next) =>{
    TaskRecruit.findAll({where: {
        recruitId: req.params.recruitId,
    }})
    .then(tasks=>{
        if(tasks){
            tasks.destroy()
            .then(() => res.sendStatus(204))
        } else {
            res.sendStatus(404)
        }

    })
    .catch(err => res.sendStatus(500))  
})

router.put("/:id", (req, res, next) => {
    TaskRecruit.findByPk(req.params.id)
    .then(task=>{
        if(task){
            task.update(req.body)
            .then(taskU =>res.status(200).json(taskU))
        } else {
            res.sendStatus(404)
        }

    })
    .catch(err => res.sendStatus(500))  
})
