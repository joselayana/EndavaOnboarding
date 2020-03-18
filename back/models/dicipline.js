const Sequelize = require('sequelize')
const sequelize = require('../db/db');

class Dicipline extends Sequelize.Model { }

Dicipline.init({
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }

}, {
    sequelize,
    modelName: 'dicipline'
});

module.exports = Dicipline;