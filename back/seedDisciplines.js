const { Discipline } = require("./models/index")

Discipline.bulkCreate([
    {
        description: "Development",
    },
    {
        description: "Project Manager",
    },
    {
        description: "Testing",
    },
    {
        description: "Pdrc",
    },
])
    .then(disciplines => {
        console.log("Creaste las disciplinas")
    })