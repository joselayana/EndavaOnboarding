const passport = require('../passport/passport');
const express = require('express');
const { User, Discipline } = require("../models/index")
const router = express.Router();

const loggedUser = function (req, res, next) {
    if (req.isAuthenticated()) {
        res.json(req.user)
    } else {
        res.json("")
    }
}

router.post("/register", function (req, res) {
    User.create(req.body)
        .then(res.send("Se creo el usuario"))
})

router.post('/login', passport.authenticate('local'), (req, res) => {
    res.send(req.user)
})

router.get("/logout", function (req, res) {
    req.logout()
    res.send('deslogueado!')
})

router.get("/check", loggedUser)

/*
<<<<<<< Este es el midelware de passport que vamos a usar mas adelante >>>>>>>

function isLogedIn(req, res, next) {
    if (req.session.passport.user) {
        next();
    } else {
        console.log("no se logueo")
    }
}

*/

router.get("/allUsers", (req, res) => {
    User.findAll({
        include: [
            { model: Discipline }
        ]
    })
        .then(users => res.status(200).json(users))
})

router.put("/changeProfile/:id", (req, res, next) => {
    const id = req.params.id
    const state = (req.body.state === 2) ? true : false
    User.update({ isAdmin: state }, { where: { id } })
        .then(() => User.findAll({
            include: [
                { model: Discipline }
            ]
        }))
        .then(users => res.status(200).json(users))
        .catch(next)
})






module.exports = router;