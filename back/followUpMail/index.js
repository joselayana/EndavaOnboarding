const express = require('express');
const { TaskRecruit, Recruit, Discipline, User, Task } = require('../models');
const Sequelize = require("sequelize")
const Promise = require("bluebird");
const nodemailer = require("nodemailer");
require('dotenv').config();
const hbs = require('nodemailer-express-handlebars');

User.findAll()
    .then(res => {
        res.map(user => {
            TaskRecruit.findAll({
                include: [
                    { model: Recruit },
                    { model: Task },
                ],
                where: {
                    userId: user.dataValues.id
                }
            })
                .then(allTasks => {
                    let pending = 0
                    let finished = 0
                    let blockOut = 0
                    allTasks.map(task => {
                        (task.dataValues.state != "finished") ?
                            (
                                (task.dataValues.state != "block out") ? pending++ : block++
                            )
                            : finished++
                    })
                    return ({ pending, finished, blockOut })
                })
                .then((input) => {
                    let objMail = {
                        name: user.dataValues.name,
                        lastName: user.dataValues.lastName,
                        email: user.dataValues.email,
                        pendingTask: input.pending,
                        finishedTask: input.finished,
                        blockOutTask: input.blockOut
                    }

                    const weeklyEmail = (mail) => {
                        setInterval(() => {
                            sendMail(mail)
                        }, 10000)  // ojooooooooooooooooooooo con el tiempo
                    }
                    weeklyEmail(objMail)
                })
        })
    })




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

         - Number of pending tasks: ${objMail.pendingTask}.
         - Number of blocked out tasks: ${objMail.blockOutTask}.
         - Number of finished: ${objMail.finishedTask}.

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



const prueba = "aqui"
module.exports = prueba