const express = require('express');
const { TaskRecruit, Recruit, Discipline, User, Task } = require('../models');
const Sequelize = require("sequelize")
const Promise = require("bluebird");
const nodemailer = require("nodemailer");
require('dotenv').config();
const hbs = require('nodemailer-express-handlebars');

//-------------------------> config email 
const sendMail = function (objMail) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "endavaOnBoard@gmail.com",
            pass: "onboard123"
        }
    });

    // transporter.use("compile", hbs({
    //     viewEngine: {
    //         extName: '.hbs',
    //         partialsDir: '../views/',
    //         defaultLayout: false
    //     },
    //     viewPath: '../views/',
    //     extName: ".hbs"
    // }))



    const followUpMail = {
        from: "endavaOnBoard@gmail.com",
        to: `${objMail.email}`,
        subject: "This is your weekly report from ON BOARD",
        text: `Dear ${objMail.name} ${objMail.lastName},

        This is the summary of all the tasks in which you are assigned as owner:

         - Amount of pending tasks: ${objMail.pendingTask}.
         - Amount of blocked out tasks: ${objMail.blockedOutTask}.
         - Amount of finished: ${objMail.finishedTask}.

         --------------------------------------------------------

         - Amount of tasks near to due date: ${objMail.nearDueDateTask}.
         - Amount of expired tasks: ${objMail.expiredTask}.

        Please check the status of all your tasks in the ON BOARD APP.

        `
        // template: "taskAssigned",
        // context: {
        //     name: `${name}`,
        //     lastName: `${lastName}`,
        //     email: `${email}`
        // }


    };
    transporter.sendMail(followUpMail, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Se ha enviando el mail");
        }
    });
}
//------------------------->




const weeklyEmail = () => {
    setInterval(() => {
        User.findAll()
            .then(res => {
                res.map(user => {
                    TaskRecruit.findAll({
                        include: [
                            { model: Recruit },
                            { model: Task },
                        ],
                        where: {
                            userId: user.id
                        }
                    })
                        .then(allTasks => {
                            let pending = 0
                            let finished = 0
                            let blockedOut = 0
                            let expired = 0
                            let nearDueDate = 0

                            allTasks.map(task => {
                                let today = new Date()
                                let due = new Date(task.dueDate)
                                if (due > today) {
                                    var diffTime = Math.abs(due - today);
                                    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                                    (diffDays <= 3) ? nearDueDate++ : null
                                } else {
                                    expired++
                                }
                                (task.state != "finished") ?
                                    (
                                        (task.state != "blocked out") ? pending++ : blockedOut++
                                    )
                                    : finished++
                            })
                            return ({ pending, finished, blockedOut, expired, nearDueDate })
                        })
                        .then((input) => {
                            let objMail = {
                                name: user.name,
                                lastName: user.lastName,
                                email: user.email,
                                pendingTask: input.pending,
                                finishedTask: input.finished,
                                blockedOutTask: input.blockedOut,
                                expiredTask: input.expired,
                                nearDueDateTask: input.nearDueDate
                            }
                            console.log("previaaaaaaaaa", objMail)
                            sendMail(objMail)

                        })
                })
            })
    }, 15000)  // ojooooooooooooooooooooo con el tiempo
}
// weeklyEmail()

const prueba = "aqui"
module.exports = prueba






