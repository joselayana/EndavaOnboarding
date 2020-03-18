const Sequelize = require('sequelize')
const sequelize = require('../config/db');

class Recruit extends Sequelize.Model { }

Recruit.init({
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }

    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }

    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    entryDate: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: true
        }

    },
    phone: {
        type: Sequelize.INTEGER,
    },
    DNI: {
        type: Sequelize.INTEGER
    }
}, {
        sequelize,
        modelName: 'recruit'
    });

module.exports = Recruit;