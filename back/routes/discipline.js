const express = require('express');
const { Discipline } = require("../models/index")
const router = express.Router();

router.post("/newDiscipline", function (req, res) {
    Discipline.create(req.body)
        .then(res.send("Se creo la disciplina"))
})


module.exports = router