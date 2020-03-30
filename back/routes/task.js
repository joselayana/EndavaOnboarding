const express = require('express');
const { Task, TaskRecruit, User, Recruit } = require("../models/index")
const router = express.Router();
const Sequelize = require("sequelize")
const nodemailer = require("nodemailer");
require('dotenv').config();
const hbs = require('nodemailer-express-handlebars');


// const sendMail = function (name, lastName, email, TaskRecruit) {

//     const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//             user: process.env.EMAIL,
//             pass: process.env.PASSWORD
//         }
//     });

//     transporter.use("compile", hbs({
//         viewEngine: {
//             extName: '.hbs',
//             partialsDir: '../views/',
//             defaultLayout: false
//         },
//         viewPath: '../views/',
//         extName: ".hbs"
//     }))


//     const taskRecruitAssigned = {
//         from: "endavaOnBoard@gmail.com",
//         to: `${email}`,
//         subject: "There is a new task waiting for you",
//         text: `Dear ${name} ${lastName},
//         You have been designated as the owner of the task :${task} for the new hired: ${recruit}, the due date's task`
//         // template: "taskAssigned",
//         // context: {
//         //     name: `${name}`,
//         //     lastName: `${lastName}`,
//         //     email: `${email}`
//         // }


//     };
//     transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log("Se ha enviando el mail");
//         }
//     });
// }















router.post("/newTask", function (req, res, next) {
    Task.create(req.body)
        .then(() => Task.findAll()
            .then(tasksList => res.status(200).json(tasksList)))
        .catch(err => console.log(err)
        )
})

router.put("/edit/:id", function (req, res, next) {
    const taskId = req.params.id
    const newState = req.body.newTaskState
    const newComment = req.body.comment

    TaskRecruit.update(
        { comment: newComment, state: newState },
        { where: { id: taskId } }
    )
        .then(TaskRecruit.findAll({
            include: [
                { model: Recruit },
                { model: Task }
            ],
        }))
        .then((allTasks) => res.status(200).json(allTasks))
        .catch(next)
})

router.get('/', function (req, res, next) {
    TaskRecruit.findAll({
        include: [
            { model: Recruit },
            { model: Task }
        ],
    })
        .then((allTasks) => res.status(200).json(allTasks))
});

router.get("/myTasks/:id", function (req, res) {
    const Op = Sequelize.Op
    const id = req.params.id
    if (req.query.s) {
        TaskRecruit.findAll({
            include: [
                {
                    model: Recruit,
                    where: { name: { [Op.iLike]: `%${req.query.s}%` } }
                },
                { model: Task }
            ],
            where: {
                userId: id,
            },
            order: [
                ['id', 'DESC'],
            ],
        })
            .then(tasks => res.send(tasks))
    } else {
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
    }
})

router.get("/recruit/:id", function (req, res) {
    const id = req.params.id

    TaskRecruit.findAll({
        include: [
            { model: Task },
            { model: User }
        ],
        where: { recruitId: id },
        order: [
            ['id', 'DESC'],
        ],
    })
        .then(tasks => res.send(tasks))
})

router.get("/allTasks", (req, res) => {
    TaskRecruit.findAll({
        include: [
            { model: Recruit },
            { model: Task },
            { model: User }
        ]
    })
        .then(allTasks => res.status(200).json(allTasks))
})

router.get("/tasksList", (req, res) => {
    Task.findAll()
        .then(tasksList => res.status(200).json(tasksList))
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

router.delete("/:id", (req, res, next) => {
    TaskRecruit.findByPk(req.params.id)
        .then(task => {
            if (task) {
                task.destroy()
                    .then(() => res.sendStatus(204))
            } else {
                res.sendStatus(404)
            }

        })
        .catch(err => res.sendStatus(500))
})

router.delete("byRecruit/:recruitId", (req, res, next) => {
    TaskRecruit.findAll({
        where: {
            recruitId: req.params.recruitId,
        }
    })
        .then(tasks => {
            if (tasks) {
                tasks.destroy()
                    .then(() => res.sendStatus(204))
            } else {
                res.sendStatus(404)
            }

        })
        .catch(err => res.sendStatus(500))
})

module.exports = router



