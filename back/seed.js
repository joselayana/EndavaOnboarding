const { Recruit, User, Discipline, Task, TaskRecruit } = require("./models/index")

// SEED DISCIPLINES //
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

// ------------------------------------- //


// ------------------------------------- //

// SEED DISCIPLINES //
// Discipline.bulkCreate([
//     {
//         description: "Development",
//     },
//     {
//         description: "Project Manager",
//     },
//     {
//         description: "Testing",
//     },
//     {
//         description: "Pdrc",
//     },
// ])
//     .then(disciplines => {
//         console.log("Creaste las disciplinas")
//     })

// ------------------------------------- //

// SEED USERS //
// User.create({
//     id: 1,
//     name: "Celeste",
//     lastName: "Colamarino",
//     email: "celeste@endava.com",
//     password: "123",
//     disciplineId: 1
// })
// User.create({
//     id: 2,
//     name: "Ignacio",
//     lastName: "Rodriguez Villasuso",
//     email: "nacho@endava.com",
//     password: "123",
//     disciplineId: 2
// })
// User.create({
//     id: 3,
//     name: "Martin",
//     lastName: "Gonzalez",
//     email: "martin@endava.com",
//     password: "123",
//     disciplineId: 3
// })
// User.create({
//     id: 4,
//     name: "Fernanda",
//     lastName: "Fernanda",
//     email: "fernanda@endava.com",
//     password: "123",
//     disciplineId: 4
// })

// ------------------------------------- //

// SEED RECRUITS //
// Recruit.create({
//     id: 1,
//     name: "Jose",
//     lastName: "Layana",
//     email: "jose.layana_@hotmail.com",
//     entryDate: 05/05/2020,
//     phone: 548356,
//     DNI: 40859019,
//     disciplineId: 1,
//     userId: 1
// })
// Recruit.create({
//     id: 2,
//     name: "Laura",
//     lastName: "Limon Molina",
//     email: "lau@lau.com",
//     entryDate: 05/05/2020,
//     phone: 548356,
//     DNI: 40859019,
//     disciplineId: 2,
//     userId: 2
// })
// ------------------------------------- //

// SEED TASKS //
// Task.create({
//     id: 1,
//     description: "Preparar computadora"
// })
// Task.create({
//     id: 2,
//     description: "Dar recorrida por las instalaciones"
// })
// Task.create({
//     id: 3,
//     description: "Presentar al equipo de trabajo"
// })
// Task.create({
//     id: 4,
//     description: "Dar charla de RRHH"
// })
// Task.create({
//     id: 5,
//     description: "Dar charla de S&H"
// })
// Task.create({
//     id: 6,
//     description: "Introducir en normativas internas de la empresa"
// })
// Task.create({
//     id: 7,
//     description: "Introducir en requisitos legales"
// })
// Task.create({
//     id: 8,
//     description: "Preparar escritorio"
// })
// Task.create({
//     id: 9,
//     description: "Crear correo con dominio @endava.com"
// })
// Task.create({
//     id: 10,
//     description: "Buddy meeting"
// })
// Task.create({
//     id: 11,
//     description: "HRC"
// })
// Task.create({
//     id: 12,
//     description: "Welcome to Endava Kit"
// })
// Task.create({
//     id: 13,
//     description: "Who are we"
// })
// Task.create({
//     id: 14,
//     description: "Welcome to the discipline"
// })
// Task.create({
//     id: 15,
//     description: "Survey Satisfaction"
// })

// ------------------------------------- //

// TaskRecruit RECRUITS //
// TaskRecruit.create({
//     id: 1,
//     dueDate: 05/06/2020,
//     comment: "tarea arrancada",
//     userId: 1,
//     recruitId: 1,
//     taskId: 1,
// })
// TaskRecruit.create({
//     id: 2,
//     dueDate: 05/06/2020,
//     comment: "tarea muy dificil",
//     userId: 2,
//     recruitId: 1,
//     taskId: 2,
// })
// TaskRecruit.create({
//     id: 3,
//     dueDate: 05/06/2020,
//     userId: 3,
//     recruitId: 1,
//     taskId: 3,
// })
// TaskRecruit.create({
//     id: 4,
//     dueDate: 05/06/2020,
//     userId: 4,
//     recruitId: 1,
//     taskId: 4,
// })
// TaskRecruit.create({
//     id: 5,
//     dueDate: 05/06/2020,
//     userId: 1,
//     recruitId: 1,
//     taskId: 5,
// })
// TaskRecruit.create({
//     id: 6,
//     dueDate: 05/06/2020,
//     userId: 2,
//     recruitId: 1,
//     taskId: 6,
// })
// TaskRecruit.create({
//     id: 7,
//     dueDate: 05/06/2020,
//     userId: 3,
//     recruitId: 1,
//     taskId: 7,
// })
// TaskRecruit.create({
//     id: 8,
//     dueDate: 05/06/2020,
//     comment: "tarea arrancada2",
//     userId: 4,
//     recruitId: 1,
//     taskId: 8,
// })
// TaskRecruit.create({
//     id: 9,
//     dueDate: 05/06/2020,
//     userId: 1,
//     recruitId: 1,
//     taskId: 9,
// })
// TaskRecruit.create({
//     id: 10,
//     dueDate: 05/06/2020,
//     userId: 2,
//     recruitId: 1,
//     taskId: 10,
// })

// TaskRecruit.create({
//     id: 11,
//     dueDate: 05/06/2020,
//     comment: "tarea arrancada",
//     userId: 3,
//     recruitId: 2,
//     taskId: 11,
// })
// TaskRecruit.create({
//     id: 12,
//     dueDate: 05/06/2020,
//     userId: 4,
//     recruitId: 2,
//     taskId: 12,
// })
// TaskRecruit.create({
//     id: 13,
//     dueDate: 05/06/2020,
//     userId: 1,
//     recruitId: 2,
//     taskId: 13,
// })
// TaskRecruit.create({
//     id: 14,
//     dueDate: 05/06/2020,
//     userId: 2,
//     recruitId: 2,
//     taskId: 14,
// })
// TaskRecruit.create({
//     id: 15,
//     dueDate: 05/06/2020,
//     userId: 3,
//     recruitId: 2,
//     taskId: 15,
// })
// TaskRecruit.create({
//     id: 16,
//     dueDate: 05/06/2020,
//     comment: "tarea por arrancarla",
//     userId: 4,
//     recruitId: 2,
//     taskId: 1,
// })
// TaskRecruit.create({
//     id: 17,
//     dueDate: 05/06/2020,
//     userId: 1,
//     recruitId: 2,
//     taskId: 2,
// })
// TaskRecruit.create({
//     id: 18,
//     dueDate: 05/06/2020,
//     userId: 2,
//     recruitId: 2,
//     taskId: 3,
// })
// TaskRecruit.create({
//     id: 19,
//     dueDate: 05/06/2020,
//     comment: "necesito ayuda para realizarla",
//     userId: 3,
//     recruitId: 2,
//     taskId: 4,
// })
// TaskRecruit.create({
//     id: 20,
//     dueDate: 05/06/2020,
//     userId: 4,
//     recruitId: 2,
//     taskId: 5,
// })

// ------------------------------------- //