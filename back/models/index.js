const Task = require("./task");
const Dicipline = require("./dicipline");
const TaskRecruit = require("./taskRecruit");
const Recruit = require("./recruit");
const User = require("./user");


// TaskRecruit.belongsTo(User);
// TaskRecruit.belongsTo(Recruit);
// TaskRecruit.belongsTo(Task);
// User.hasMany(Recruit);
// User.belongsTo(Dicipline)
// Recruit.belongsTo(User);
// Recruit.hasMany(Task);
// Task.belongsTo(Recruit);
// Task.hasMany(Dicipline);
// Dicipline.hasMany(User);
// Dicipline.hasMany(Recruit);
// Dicipline.hasMany(Task)

module.exports = { Task, Dicipline, TaskRecruit, Recruit, User }