const Task = require("./task");
const Dicipline = require("./dicipline");
const TaskRecruit = require("./taskRecruit");
const Recruit = require("./recruit");
const User = require("./user");


TaskRecruit.belongsTo(User);
TaskRecruit.belongsTo(Recruit);
TaskRecruit.belongsTo(Task);
Recruit.belongsTo(User);
Recruit.belongsTo(Dicipline);
User.belongsTo(Dicipline)
Task.belongsToMany(Dicipline, { through: 'dicipline_task' });
Dicipline.belongsToMany(Task, { through: 'dicipline_task' });

module.exports = { Task, Dicipline, TaskRecruit, Recruit, User }