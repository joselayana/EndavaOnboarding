const express = require('express');
const router = express.Router();
const { Recruit, Discipline, User } = require('../models');
const Sequelize = require("sequelize")
const Promise = require("bluebird");
module.exports = router;

router.get('/', function (req, res, next) {
    const Op = Sequelize.Op
    if(req.query.s){
        Recruit.findAll({
            where: { name: { [Op.iLike]: `%${req.query.s}%` }}
        })
        .then(recruits => res.status(200).json(recruits))
    } else{
        Recruit.findAll()
        .then((recruit) => res.status(200).json(recruit))
    }
});


router.get("/:id", (req, res, next) =>{
    Recruit.findByPk(req.params.id)
    .then(recruit=> {
        if(recruit){
            res.status(200).json(recruit)
        } else {
            res.sendStatus(404)
        }

    })
    .catch(err =>res.sendStatus(500))

});

router.post('/', function (req, res, next) {
    Recruit.create(req.body)
    .then(nuevoRecruit => {
        return Promise.all([
            nuevoRecruit.setDiscipline(req.body.discipline),
            nuevoRecruit.setUser(req.user)
        ])
    })
    .then((nuevoRecruit) => res.status(201).json(nuevoRecruit))
});

router.delete("/:id", (req,res,next) =>{
    Recruit.findByPk(req.params.id)
    .then(recruit=>{
        if(recruit){
            recruit.destroy()
            .then(() => res.sendStatus(204))
        } else {
            res.sendStatus(404)
        }

    })
    .catch(err => res.sendStatus(500))  
})