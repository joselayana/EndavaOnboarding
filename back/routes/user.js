const passport = require('../passport/passport');
const express = require('express');
const { User } = require("../models/index")
const router = express.Router();

const loggedUser = function (req, res, next) {
    if (req.isAuthenticated()) {
        res.json(req.user)
    } else {
        res.json("")
    }
}

router.post("/user/register", function (req, res) {
    User.create(req.body)
        .then(res.send("Se creo el usuario"))
})

router.post('/user/login', passport.authenticate('local'), (req, res) => {
    res.send(req.user)
})

router.get("/user/logout", function (req, res) {
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

module.exports = router;