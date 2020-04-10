const express = require('express');
const router = express.Router();
const { Recruit, Discipline, User, TaskRecruit } = require('../models');
const Sequelize = require("sequelize")
const Promise = require("bluebird");
module.exports = router;

router.get('/', function (req, res, next) {
    const Op = Sequelize.Op
    if (req.query.s) {
        Recruit.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${req.query.s}%` } },
                    { lastName: { [Op.iLike]: `%${req.query.s}%` } }
                ]
            },
            include: [
                { model: Discipline }
            ],
        })
            .then(recruits => res.status(200).json(recruits))
    } else {
        Recruit.findAll({
            include: [
                { model: Discipline }
            ],
        })
            .then((recruit) => res.status(200).json(recruit))
    }
});

router.get("/:id", (req, res, next) => {
    Recruit.findByPk(req.params.id)
        .then(recruit => {
            if (recruit) {
                res.status(200).json(recruit)
            } else {
                res.sendStatus(404)
            }

        })
        .catch(err => res.sendStatus(500))

});

router.post('/', function (req, res, next) {
    Recruit.create({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        DNI: req.body.DNI,
        entryDate: req.body.entryDate
    })
        .then(nuevoRecruit => {
            return Promise.all([
                nuevoRecruit.setDiscipline(req.body.disciplineId),
                nuevoRecruit.setUser(req.body.userId)
            ])
        })
        .then((nuevoRecruit) => res.status(201).json(nuevoRecruit))
        .catch(function (err) {
            console.log(err);
        })
});

router.delete("/delete/:id", (req, res, next) => {
    let recruitId = req.params.id
    TaskRecruit.findAll({
        where: {
            recruitId
        }
    })
        .then(allTask => {
            allTask.map(task => task.destroy())
        })
        .then(
            Recruit.destroy({
                where: {
                    id: recruitId
                }
            })

        )
        .then(
            Recruit.findAll({
                include: [
                    { model: Discipline }
                ],
            })
                .then(allRecruit => {
                    console.log("aquiiii", allRecruit.length);
                    console.log("aquiiiiiiiiiiiiiiii000000", allRecruit[0].dataValues);
                    console.log("aquiiiiiiiiiiiiiiii11111111", allRecruit[1].dataValues);
                    console.log("aquiiiiiiiiiiiiiiii222222", allRecruit[2].dataValues);

                    res.status(200).send(allRecruit)
                })
        )



})

router.put("/edit/:id", (req, res, next) => {
    Recruit.findByPk(req.params.id)
        .then(recruit => {
            if (recruit) {
                recruit.update(req.body)
                    // aca hay que desglosar el req.body para que complete solo los datos que estan defined
                    .then(recruitU => res.status(200).json(recruitU))
            } else {
                res.sendStatus(404)
            }

        })
        .catch(err => res.sendStatus(500))
})